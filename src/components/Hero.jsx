import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import heroImg from "../assets/banner1.jpg";

export default function Hero() {
  return (
    <AnimatedSection>
      <section className="hero-banner relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            High End <span className="text-brand">Creative</span> 
            <br />
            Agency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-gray-600 max-w-lg"
          >
            Through our years of experience, we’ve also learned that while each
            channel has its own set of advantages, they all work best when
            strategically combined.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="px-6 py-3 rounded-full bg-brand text-white shadow-lg hover:opacity-90 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition">
              Learn More
            </button>
          </motion.div>
        </div>

        <div>
          <div className="make-brand relative w-40 h-40 md:w-42 md:h-42 lg:w-45 lg:h-45 flex justify-center items-center z-10 mt-10 md:mt-0 mr-0 md:mr-12">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full animate-spin-slow"
            >
              <path
                id="circlePath"
                d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                fill="none"
              />
              <text
                fill="black"
                fontSize="14"
                fontWeight="900"
                letterSpacing="2"
              >
                <textPath href="#circlePath">
                  • BUILD YOUR BRAND • BUILD YOUR BRAND • BUILD YOUR BRAND •
                </textPath>
              </text>
            </svg>
          </div>
          <div
            className="relative w-full min-h-screen flex justify-center md:justify-end items-start md:items-center py-16 md:py-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})`, marginTop: -84 }}
          >
            <div className="absolute inset-0 bg-black/20 md:rounded-l-2xl"></div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
