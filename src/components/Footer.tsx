import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold">Fonder</h3>
          <p className="mt-2 text-gray-400">
            Creative digital agency delivering high-quality design &
            development.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-gray-400">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Fonder. All rights reserved.
      </div>
    </footer>
  );
}
