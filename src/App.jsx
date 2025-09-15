import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Halaman utama
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Service";
import Portfolio from "./components/Porto";
import Sertifikat from "./components/Sertifikat";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Halaman project detail
import ProjectDetails from "./pages/ProjectDetails";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <Navbar />
      <Hero data-aos="fade-up" />
      <About data-aos="fade-up" />
      <Services data-aos="fade-up" />
      <Portfolio data-aos="fade-up" />
      <Sertifikat data-aos="fade-up" />
      <Contact data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman detail project */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
