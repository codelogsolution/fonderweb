import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Code, PenTool, Target, Megaphone } from "lucide-react"; // icons
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable websites built with Next.js & React. We focus on performance, SEO, and responsiveness.",
    icon: <Code className="w-10 h-10 text-brand" />,
  },
  {
    title: "UI/UX Design",
    desc: "Elegant, user-centered interfaces with smooth animations. From wireframes to polished designs.",
    icon: <PenTool className="w-10 h-10 text-brand" />,
  },
  {
    title: "Brand Strategy",
    desc: "Cohesive branding and visual identity for your business. We craft stories that resonate with your audience.",
    icon: <Target className="w-10 h-10 text-brand" />,
  },
  {
    title: "Marketing",
    desc: "SEO, campaigns, and content strategies to boost visibility. Helping you attract and retain customers.",
    icon: <Megaphone className="w-10 h-10 text-brand" />,
  },
];

export default function Services() {
  return (
    <>
      {/* Services Grid */}
      <AnimatedSection>
        <section className="py-10 lg:py-20 overflow-x-hidden">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Services
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1], // 👈 Smooth cubic bezier easing
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
                >
                  <div className="mb-6">{s.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-brand">
                    {s.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Hero / Intro */}
      <AnimatedSection>
        <section className="py-16 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We help brands grow with{" "}
              <span className="text-brand">design</span> &{" "}
              <span className="text-brand">technology</span>.
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              From strategy to execution — our team crafts digital solutions
              that drive growth, inspire engagement, and leave a lasting impact.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection>
        <section className="py-16 lg:py-24 bg-brand text-white overflow-x-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side Animation */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Agency?
              </h3>
              <ul className="space-y-4 text-lg">
                <li>✔ Experienced team with proven track record</li>
                <li>✔ Creative + data-driven approach</li>
                <li>✔ Transparent process & on-time delivery</li>
                <li>✔ Long-term partnership focus</li>
              </ul>
            </motion.div>

            {/* Right Side Animation */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg"
            >
              <p className="text-xl font-semibold mb-4">
                “Working with this team completely transformed our online
                presence. Highly recommended!”
              </p>
              <p className="text-sm opacity-80">— Client Testimonial</p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
