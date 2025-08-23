import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedSection({ children, className }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { margin: "-10% 0px" });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, filter: "blur(0px)" });
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={controls}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
