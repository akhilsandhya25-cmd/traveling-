import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Brief theatrical opening veil that glides upward to unveil the Hero.
 * Clears cleanly from the DOM once complete.
 */
export function PageIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-intro-veil"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="editorial-grain pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#102820] text-[#F7F4EC]"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.35 } }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <span className="text-[10px] font-medium tracking-[0.42em] text-[#C6A66B] uppercase">
              The Art of Travelling
            </span>
            <span className="font-editorial mt-3 text-4xl tracking-[0.28em] text-white sm:text-5xl">
              ARANYA
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 h-px w-24 origin-center bg-[#C6A66B]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
