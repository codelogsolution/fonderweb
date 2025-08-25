import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"

export default function About() {
  const team = [
    {
      name: "Aarav Sharma",
      role: "Founder & CEO",
      image: t1,
    },
    {
      name: "Ishita Mehta",
      role: "Creative Director",
      image: t2,
    },
    {
      name: "Rohan Verma",
      role: "Marketing Head",
      image: t3,
    },
    {
      name: "Priya Nair",
      role: "Lead Designer",
      image: t1,
    },
  ];

  return (
    <AnimatedSection>
      <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero / Intro */}
        <div className="max-w-6xl mx-auto px-6 py-5 lg:py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            About <span className="text-brand">Fonder</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We’re a passionate digital marketing agency helping brands grow
            faster in today’s connected world. At Fonder, we mix creativity,
            strategy, and technology to craft powerful experiences that leave a
            mark.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our <span className="text-brand">Mission</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To empower modern brands with cutting-edge design, impactful
              marketing, and meaningful digital experiences that build long-term
              connections with audiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Our <span className="text-brand">Vision</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To become a global leader in creative marketing by blending art,
              innovation, and strategy — helping businesses transform into
              unforgettable brands.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto px-6 py-5 lg:py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-900"
          >
            Meet Our <span className="text-brand">Team</span>
          </motion.h2>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-brand text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-brand text-white py-16 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Let’s Build Your Brand Story Together
          </motion.h2>
          <p className="mt-4 text-lg text-white/90">
            Ready to elevate your business with Fonder? Let’s talk today.
          </p>
          <button className="mt-6 px-8 py-3 rounded-full bg-white text-brand font-semibold shadow-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </section>
    </AnimatedSection>
  );
}
