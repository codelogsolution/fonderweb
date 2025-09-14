import { Routes, Route } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import BlogStrip from "./components/BlogStrip";
import Courses from "./components/Courses";
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
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<BlogStrip />} />
          <Route path="/contact" element={<Contact />} />
          {/* Sub-services */}
          {/* <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/services/ui-ux" element={<UIUX />} />
          <Route path="/services/marketing" element={<Marketing />} /> */}
        </Routes>
      </main>
      <Footer />

      <FloatingContact
        brand="#0B1C3F"
        whatsappNumber="917042620665"
        callNumber="+91 70426 20665"
        message="Hi! I’m looking to discuss a project involving full digital solutions. This includes:

Website and mobile app development

Digital and social media marketing

Social media content scripting

Video creation and editing

I'd love to connect with your team to explore how we can bring this vision to life. Please let me know the best way to get started.

Looking forward to your response!

Best regards,
Fonder"
      />
    </>
  );
}
