import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  { title: "E-commerce Website", img: "/images/portfolio1.jpg" },
  { title: "SaaS Dashboard", img: "/images/portfolio2.jpg" },
  { title: "Mobile App UI", img: "/images/portfolio3.jpg" },
  { title: "Brand Landing Page", img: "/images/portfolio4.jpg" },
];

export default function Portfolio() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gray-50">
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
  );
}
