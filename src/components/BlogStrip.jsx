import React from "react";
import AnimatedSection from "./AnimatedSection";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";

const blogs = [
  {
    title: "Top Design Trends 2025",
    date: "Aug 10, 2025",
    img: b1,
  },
  {
    title: "Next.js vs React: What to Choose?",
    date: "Jul 28, 2025",
    img: b2,
  },
  {
    title: "SEO Hacks for Startups",
    date: "Jul 12, 2025",
    img: b3,
  },
];

export default function BlogStrip() {
  return (
    <AnimatedSection>
      <section className="py-5 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center my-10">
            Latest Blogs
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {blogs.map((b, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition"
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500">{b.date}</p>
                  <h3 className="mt-2 font-semibold text-lg">{b.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
