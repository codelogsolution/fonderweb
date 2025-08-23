import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-brand text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Let’s build something amazing together. Contact us today to discuss
            your idea.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-brand rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </AnimatedSection>
  );
}
