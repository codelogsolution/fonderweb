import React from "react";

export default function Marquee() {
  const items = [
    "Creative Design",
    "Next.js Development",
    "Digital Marketing",
    "SEO Optimization",
    "Branding",
    "UI/UX Strategy",
  ]; 

  return (
    <section className="bg-white marquee-section">
      <div className="overflow-hidden">
        {/* The moving track */}
        <div className="flex animate-marquee will-change-transform">
          {/* Copy #1 */}
          <ul className="flex shrink-0 items-center gap-12 py-4 pr-12">
            {items.map((t, i) => (
              <li key={`a-${i}`} className="text-xl md:text-2xl font-display font-extrabold text-ink">
                {t}
              </li>
            ))}
          </ul>
          {/* Copy #2 (aria-hidden for a11y) */}
          <ul className="flex shrink-0 items-center gap-12 py-4 pr-12" aria-hidden="true">
            {items.map((t, i) => (
              <li key={`b-${i}`} className="text-xl md:text-2xl font-display font-extrabold text-ink">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
