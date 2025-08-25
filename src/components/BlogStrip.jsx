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

const newsList = [
  {
    title: "Our Client XYZ Won Best Startup Award",
    date: "Aug 15, 2025",
    desc: "We’re proud to share that our client XYZ received recognition for their innovative product in the tech space.",
    img: b1,
  },
  {
    title: "Partnership with ABC Technologies",
    date: "Aug 02, 2025",
    desc: "We have entered a new strategic partnership with ABC Technologies to deliver even better services.",
    img: b2,
  },
  {
    title: "Expanding Our Team",
    date: "Jul 20, 2025",
    desc: "Excited to welcome 5 new creative minds to our design & development team.",
    img: b3,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Featured Blogs */}
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

      {/* Clients News / Updates Section */}
      <AnimatedSection>
        <section className="py-10 lg:py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center my-10">
              Client Updates & News
            </h2>
            <div className="mt-8 space-y-6 max-w-3xl mx-auto">
              {newsList.map((n, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  {/* Left Client Image */}
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-14 h-14 rounded-full object-cover border border-gray-200"
                  />
                  
                  {/* Right Content */}
                  <div>
                    <p className="text-sm text-gray-500">{n.date}</p>
                    <h3 className="mt-1 font-semibold text-lg text-brand">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
