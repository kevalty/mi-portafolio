import { motion as Motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReduced = useReducedMotion();

  return (
    <Motion.div
      ref={ref}
      initial={prefersReduced ? false : { opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </Motion.div>
  );
}
