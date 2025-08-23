import React from "react";
import AnimatedSection from "./AnimatedSection";

const blogs = [
  {
    title: "Top Design Trends 2025",
    date: "Aug 10, 2025",
    img: "/images/blog1.jpg",
  },
  {
    title: "Next.js vs React: What to Choose?",
    date: "Jul 28, 2025",
    img: "/images/blog2.jpg",
  },
  {
    title: "SEO Hacks for Startups",
    date: "Jul 12, 2025",
    img: "/images/blog3.jpg",
  },
];

export default function BlogStrip() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gray-50">
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
