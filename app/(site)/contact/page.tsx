import LeafPen from '@/components/animations/leaf-pen';
import ContactForm from '@/components/sections/contact-form';

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Get in touch</h1>

      <div className="relative mt-8 rounded-2xl card p-6" data-pen-area>
        {/* Fixed Ink Pot - separate from movable pen */}
        <div data-ink-pot className="pointer-events-none absolute bottom-6 right-6 z-10">
          <svg
            width="40"
            height="50"
            viewBox="0 0 40 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            {/* Ink pot body - teal/turquoise */}
            <rect
              x="8"
              y="15"
              width="24"
              height="25"
              rx="4"
              fill="#14B8A6"
              stroke="#0F766E"
              strokeWidth="2"
            />

            {/* Ink pot cap - black with ridges */}
            <rect
              x="6"
              y="8"
              width="28"
              height="12"
              rx="3"
              fill="#1F2937"
              stroke="#111827"
              strokeWidth="2"
            />
            <rect x="8" y="10" width="24" height="2" rx="1" fill="#374151" />
            <rect x="8" y="13" width="24" height="2" rx="1" fill="#374151" />
            <rect x="8" y="16" width="24" height="2" rx="1" fill="#374151" />

            {/* Beige neck ring */}
            <rect
              x="10"
              y="20"
              width="20"
              height="6"
              rx="2"
              fill="#D2B48C"
              stroke="#A0522D"
              strokeWidth="1.5"
            />

            {/* Red label with golden leaf */}
            <rect
              x="12"
              y="26"
              width="16"
              height="8"
              rx="2"
              fill="#DC2626"
              stroke="#991B1B"
              strokeWidth="1.5"
            />

            {/* Golden leaf on label */}
            <path
              d="M16 28C18 26 20 25 22 24C24 22 26 21 28 20C26 22 24 24 22 26C20 28 18 30 16 28Z"
              fill="#FCD34D"
              stroke="#F59E0B"
              strokeWidth="1"
            />
            <path d="M18 26L20 28L22 26" stroke="#F59E0B" strokeWidth="1" fill="none" />
            <path d="M19 27L20 29L21 27" stroke="#F59E0B" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <LeafPen />

        <ContactForm />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Prefer email?{' '}
        <a className="underline" href="mailto:fidakainth@gmail.com">
          fidakainth@gmail.com
        </a>
      </p>
    </main>
  );
}
