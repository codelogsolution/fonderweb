import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import AnimatedSection from "./AnimatedSection";
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, StartupX",
    text: "The team delivered our platform with great design and speed. Highly recommend!",
    img: t1,
  },
  {
    name: "David Kim",
    role: "Marketing Head, BrandCo",
    text: "Amazing creative ideas and smooth animations. Our site looks world-class.",
    img: t2,
  },
  {
    name: "Emily",
    role: "Founder, E-Shop",
    text: "They helped us grow our online business with a sleek ecommerce solution.",
    img: t3,
  },
];

export default function Testimonials() {
  return (
    <AnimatedSection>
      <section className="py-5 lg:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What Clients Say
          </h2>
          <div className="mt-12">
            <Swiper spaceBetween={30} slidesPerView={1} autoplay>
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white p-8 rounded-2xl shadow text-center max-w-xl mx-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600 italic">“{t.text}”</p>
                    <h3 className="mt-4 font-semibold">{t.name}</h3>
                    <span className="text-sm text-gray-500">{t.role}</span>
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
