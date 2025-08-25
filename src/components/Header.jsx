import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";
import Logo from "../assets/f-logo.svg?url";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header-custom fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur bg-white/70 shadow-sm" : ""
      }`}
    >
      <div className="header-text container-fluid flex items-center justify-between py-2 px-6">
        <Link to="/">
          <img width={150} src={Logo} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm relative">
          <Link to="/about" className="hover:text-brand">
            About
          </Link>

          {/* Dropdown Parent */}
          <div className="group relative">
            <Link
              to="/services"
              className="flex items-center gap-1 cursor-pointer hover:text-brand"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 mt-0.5 transition-transform group-hover:rotate-180" />
            </Link>

            {/* Dropdown Content */}
            <div
              className="absolute left-0 top-full mt-3 w-56 bg-white shadow-lg rounded-md border-t border-gray-200 
                  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 
                  pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50"
            >
              <ul className="text-sm text-gray-700 py-2">
                <li>
                  <Link
                    to="/services/web-development"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ui-ux"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/marketing"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to="/protfolio" className="hover:text-brand">
            Portfolio
          </Link>
          <Link to="/blog" className="hover:text-brand">
            Blog
          </Link>

          <Link to="/contactus">
          <Button>Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 grid gap-3 text-sm pb-6">
            {["About", "Services", "Portfolio", "Blog"].map((i) => (
              <Link
                key={i}
                to={`/${i.toLowerCase()}`}
                className="hover:text-brand py-1"
                onClick={() => {
                  setOpen(false); // close menu
                  window.scrollTo(0, 0); // optional: scroll to top
                }}
              >
                {i}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
