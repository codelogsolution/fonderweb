import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Get in <span className="text-brand">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Let’s talk about your project, ideas, or collaboration. Fill the
            form or reach us directly.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Our Office
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-brand/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium text-gray-800">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-brand/10 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-medium text-gray-800">
                    info@fonderagency.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-brand/10 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="font-medium text-gray-800">
                    123 Noida Sector-63, India - 201301
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Send us a Message
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand outline-none transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand outline-none transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand outline-none transition"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-brand text-white py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
