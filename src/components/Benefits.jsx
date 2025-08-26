import React from "react";
import {
  Lightbulb,
  Rocket,
  Users,
  Code,
  Smartphone,
  Layers,
  BookOpen
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Lightbulb className="w-8 h-8 text-brand" />,
    title: "Creative Strategy",
    desc: "We deliver unique ideas tailored to your business goals.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-brand" />,
    title: "Fast Delivery",
    desc: "Agile process with quick turnaround times and efficiency.",
  },
  {
    icon: <Users className="w-8 h-8 text-brand" />,
    title: "Client Focused",
    desc: "Transparent communication and customer-first approach.",
  },
];

const courses = [
  {
    title: "Fullstack Development",
    icon: <Code className="w-10 h-10 text-brand" />,
  },
  { title: "UI/UX Design", icon: <Layers className="w-10 h-10 text-brand" /> },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-10 h-10 text-brand" />,
  },
  {
    title: "Digital Marketing",
    icon: <BookOpen className="w-10 h-10 text-brand" />,
  },
];

export default function Benefits() {
  return (
    <>
      <AnimatedSection>
        <section className="py-5 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Work With Us
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-10">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
                >
                  <div className="flex justify-center mb-6">{b.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-12 lg:py-20 bg-gray-100 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to take your brand to the next level?
          </h3>
          <button className="px-8 py-3 rounded-full bg-brand text-white font-semibold shadow hover:scale-105 transition">
            Let’s Work Together
          </button>
        </section>
      </AnimatedSection>

      {/* Courses Section */}
      <AnimatedSection>
        <section className="py-10 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Courses
            </h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((c, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center"
                >
                  <div className="flex justify-center mb-4">{c.icon}</div>
                  <h3 className="font-semibold">{c.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
