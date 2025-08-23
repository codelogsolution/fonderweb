import React from "react";
import { Lightbulb, Rocket, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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

export default function Benefits() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gray-50">
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
  );
}
