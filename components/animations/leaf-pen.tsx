'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  containerSelector?: string; // CSS selector of the area to follow (default: [data-pen-area])
  potSelector?: string; // CSS selector of the ink pot (default: [data-ink-pot])
};

/**
 * LeafPen renders a floating pen/leaf that follows the cursor inside a container.
 * If idle for a moment, it dips itself into an ink pot.
 */
export default function LeafPen({ containerSelector = '[data-pen-area]', potSelector = '[data-ink-pot]' }: Props) {
  const penRef = useRef<HTMLDivElement | null>(null);
  const idleTimerRef = useRef<number | null>(null);
  const typingTimerRef = useRef<number | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 80, y: 80 });
  const [isIdleDip, setIsIdleDip] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 80, y: 80 });

  const container = useMemo(() => {
    return () => document.querySelector(containerSelector) as HTMLElement | null;
  }, [containerSelector]);

  const pot = useMemo(() => {
    return () => document.querySelector(potSelector) as HTMLElement | null;
  }, [potSelector]);

  const scheduleIdle = useCallback(() => {
    if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    idleTimerRef.current = window.setTimeout(() => {
      // Only move to ink pot if not currently typing
      if (!isTyping) {
        const c = container();
        const p = pot();
        if (!c || !p) return;
        const cr = c.getBoundingClientRect();
        const pr = p.getBoundingClientRect();
        const targetX = pr.left - cr.left + pr.width * 0.5;
        const targetY = pr.top - cr.top + pr.height * 0.2;
        setPos({ x: targetX, y: targetY });
        setIsIdleDip(true);
        window.setTimeout(() => setIsIdleDip(false), 900);
      }
    }, 2000); // Increased timeout to 2 seconds
  }, [container, pot, isTyping]);

  const handleTyping = useCallback(() => {
    setIsTyping(true);
    // When user starts typing, move pen back to last mouse position (writing area)
    setPos(lastMousePos.current);
    setIsIdleDip(false);
    
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    typingTimerRef.current = window.setTimeout(() => {
      setIsTyping(false);
    }, 1000); // Consider not typing after 1 second of no activity
  }, []);

  useEffect(() => {
    const c = container();
    if (!c) return;

    const onMove = (e: MouseEvent) => {
      const r = c.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - r.left, r.width));
      const y = Math.max(0, Math.min(e.clientY - r.top, r.height));
      
      // Always update position when mouse moves
      setPos({ x, y });
      // Store the last mouse position for when typing resumes
      lastMousePos.current = { x, y };
      
      setIsIdleDip(false);
      scheduleIdle();
    };

    const onTyping = () => {
      handleTyping();
    };

    const onFocus = (e: Event) => {
      // When user focuses on a form field, move pen to that field area
      const target = e.target as HTMLElement;
      const r = c.getBoundingClientRect();
      const fieldRect = target.getBoundingClientRect();
      const x = Math.max(0, Math.min(fieldRect.left - r.left + fieldRect.width * 0.5, r.width));
      const y = Math.max(0, Math.min(fieldRect.top - r.top + fieldRect.height * 0.5, r.height));
      
      setPos({ x, y });
      lastMousePos.current = { x, y };
      setIsIdleDip(false);
    };

    // Listen for typing events on form elements
    const formElements = c.querySelectorAll('input, textarea');
    formElements.forEach(element => {
      element.addEventListener('input', onTyping);
      element.addEventListener('keydown', onTyping);
      element.addEventListener('focus', onFocus);
    });

    c.addEventListener('mousemove', onMove);
    scheduleIdle();
    
    return () => {
      c.removeEventListener('mousemove', onMove);
      formElements.forEach(element => {
        element.removeEventListener('input', onTyping);
        element.removeEventListener('keydown', onTyping);
        element.removeEventListener('focus', onFocus);
      });
      if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
      if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    };
  }, [container, scheduleIdle, handleTyping]);

  const style: React.CSSProperties = {
    transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) rotate(${isIdleDip ? -35 : 0}deg)`,
  };

  return (
    <div
      ref={penRef}
      className={
        'pointer-events-none absolute left-0 top-0 z-20 transition-transform duration-300 will-change-transform'
      }
      style={style}
    >
      {/* Golden Feather Pen */}
      <svg
        width="50"
        height="50"
        viewBox="0 0 60 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_12px_rgba(251,191,36,0.4)]"
      >
        {/* Feather body with gradient */}
        <defs>
          <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#FEF3C7" />
          </linearGradient>
        </defs>
        
        {/* Main feather shape */}
        <path 
          d="M8 65C12 45 20 35 30 25C35 20 40 15 45 10C42 25 38 40 30 50C25 55 15 60 8 65Z" 
          fill="url(#featherGradient)" 
          stroke="#92400E" 
          strokeWidth="2"
        />
        
        {/* Feather texture lines */}
        <path d="M12 55C15 50 18 45 22 40" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.8" />
        <path d="M15 50C18 45 21 40 25 35" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.8" />
        <path d="M18 45C21 40 24 35 28 30" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.8" />
        <path d="M22 40C25 35 28 30 32 25" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.8" />
        <path d="M25 35C28 30 31 25 35 20" stroke="#F59E0B" strokeWidth="1.5" fill="none" opacity="0.8" />
        
        {/* Central spine - bright blue */}
        <path d="M30 10L30 65" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        
        {/* Pen nib - bright blue */}
        <path d="M25 65L30 70L35 65L30 60Z" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2" />
        
        {/* Nib detail lines */}
        <path d="M27 65L30 68L33 65" stroke="#1E40AF" strokeWidth="1" fill="none" />
        <path d="M28 67L30 69L32 67" stroke="#1E40AF" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}



