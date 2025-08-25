import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact({
  brand = "#0B1C3F",
  whatsappNumber = "919876543210",
  callNumber = "+919876543210",
  message = "Hi! I'd like to discuss a project.",
}) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 transition"
        style={{ backgroundColor: "#25D366" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaWhatsapp className="w-5 h-5" />
        <span className="font-medium">WhatsApp</span>
      </motion.a>

      {/* Phone */}
      <motion.a
        href={`tel:${callNumber}`}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 transition"
        style={{ backgroundColor: brand }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">Call Me</span>
      </motion.a>
    </div>
  );
}
