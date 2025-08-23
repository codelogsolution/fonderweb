import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection>
      <section className="hero-banner relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 max-w-4xl leading-tight"
        >
          Creative Digital Agency <br />
          <span className="text-brand">for Modern Brands</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl"
        >
          We build professional websites, apps, and digital experiences with
          top-class design and smooth animations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <button className="px-6 py-3 rounded-full bg-brand text-white shadow-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition">
            Learn More
          </button>
        </motion.div>
      </section>
    </AnimatedSection>
  );
}
