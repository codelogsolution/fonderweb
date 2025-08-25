import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup"; // ✅ Direct import is fine in React

import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: 80, max: 100, label: "Projects Delivered" },
  { number: 45, max: 50, label: "Happy Clients" },
  { number: 8, max: 10, label: "Years Experience" },
  { number: 12, max: 15, label: "Team Members" },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <AnimatedSection>
      <section
        ref={sectionRef}
        className="py-5 lg:py-20 bg-brand text-white"
        id="stats"
      >
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="w-24 h-24 mx-auto relative">
                <CircularProgressbar
                  value={animate ? s.number : 0}
                  maxValue={s.max}
                  strokeWidth={4}
                  styles={buildStyles({
                    pathColor: "#ffffff",
                    trailColor: "rgba(255,255,255,0.2)",
                    textColor: "#ffffff",
                    textSize: "0px",
                  })}
                />
                {/* Overlay counter */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-base md:text-lg">
                  {animate ? (
                    <span>
                      <CountUp start={0} end={s.number} duration={2} /> / {s.max}
                    </span>
                  ) : (
                    `0 / ${s.max}`
                  )}
                </div>
              </div>
              <p className="mt-4 text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
