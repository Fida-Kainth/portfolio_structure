/** Shared motion variants (plain objects; import in framer-motion if installed) */
export const fadeInUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const staggerContainer = (stagger = 0.08, delay = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};
