import { Routes, Route } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import BlogStrip from "./components/BlogStrip";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./hooks/ScrollToTop";
import FloatingContact from "./components/FloatingContact";

export default function App() {
  useLenis();
  return (
    <>
      <Header />
      <main className="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<BlogStrip />} />
          <Route path="/contactus" element={<Contact />} />
          {/* Sub-services */}
          {/* <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/services/ui-ux" element={<UIUX />} />
          <Route path="/services/marketing" element={<Marketing />} /> */}
        </Routes>
      </main>
      <Footer />

      <FloatingContact
        brand="#0B1C3F"
        whatsappNumber="919876543210"
        callNumber="+91 98765 43210"
        message="Hi! I'd like to discuss a project."
      />
    </>
  );
}
