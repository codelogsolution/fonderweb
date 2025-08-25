import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import AnimatedSection from "./AnimatedSection";
import img1 from '../assets/ecom.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'

const projects = [
  { title: "E-commerce Website", img: img1 },
  { title: "SaaS Dashboard", img: img2 },
  { title: "Mobile App UI", img: img3 },
  { title: "Brand Landing Page", img: img4 },
];

export default function Portfolio() {
  return (
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
  );
}
