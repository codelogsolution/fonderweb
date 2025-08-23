import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import BlogStrip from "../components/BlogStrip";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Benefits />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <BlogStrip />
      <CTA />
    </>
  );
}
