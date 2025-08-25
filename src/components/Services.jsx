import React from "react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable websites built with Next.js & React.",
  },
  {
    title: "UI/UX Design",
    desc: "Elegant, user-centered interfaces with smooth animations.",
  },
  {
    title: "Brand Strategy",
    desc: "Cohesive branding and visual identity for your business.",
  },
  {
    title: "Marketing",
    desc: "SEO, campaigns, and content strategies to boost visibility.",
  },
];

export default function Services() {
  return (
    <AnimatedSection>
      <section className="py-5 lg:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-10">
            Our Services
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
