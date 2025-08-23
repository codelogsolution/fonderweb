import { Routes, Route } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import BlogStrip from "./components/BlogStrip";

export default function App() {
  useLenis();
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogStrip />} />
          {/* Sub-services */}
          {/* <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/services/ui-ux" element={<UIUX />} />
          <Route path="/services/marketing" element={<Marketing />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
