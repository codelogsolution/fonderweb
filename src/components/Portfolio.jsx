import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import AnimatedSection from "./AnimatedSection";
import img1 from "../assets/ecom.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import { motion } from "framer-motion";
import { Code, Layers, Smartphone, BookOpen } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    img: img1,
    desc: "Scalable online store with payment integration.",
  },
  {
    title: "SaaS Dashboard",
    img: img2,
    desc: "Analytics dashboard with real-time charts.",
  },
  {
    title: "Mobile App UI",
    img: img3,
    desc: "Cross-platform UI for React Native apps.",
  },
  {
    title: "Brand Landing Page",
    img: img4,
    desc: "Creative landing page with animations.",
  },
];

const skills = [
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 85 },
  { name: "React Native", level: 75 },
  { name: "C Language", level: 70 },
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

export default function Portfolio() {
  return (
    <>
      {/* Portfolio Swiper Section */}
      <AnimatedSection>
        <section className="py-5 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Portfolio
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Some of our latest creative works.
            </p>
            <div className="mt-12">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {projects.map((p, i) => (
                  <SwiperSlide key={i}>
                    <div className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4 bg-white">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection>
        <section className="py-10 lg:py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Skills
            </h2>
            <div className="mt-10 space-y-6 max-w-2xl mx-auto">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-3 bg-brand rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* Project Details Section */}
      <AnimatedSection>
        <section className="py-10 lg:py-20 bg-white overflow-x-hidden">
          <div className="container mx-auto px-6 space-y-16">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }} // reduced value
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-xl shadow-lg w-full md:w-1/2 h-72 object-cover"
                />

                {/* Text */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="text-gray-600 mt-4">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
