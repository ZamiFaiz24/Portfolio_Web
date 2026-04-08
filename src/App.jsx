import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; 

// Halaman utama
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Service";
import Portfolio from "./components/sections/Porto";
import Sertifikat from "./components/sections/Sertifikat";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";

// Halaman project detail
import ProjectDetails from "./pages/ProjectDetails";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <Navbar />
      <Hero />
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
    // Delay AOS initialization untuk menghindari layout shift saat page load
    const timer = setTimeout(() => {
      AOS.init({ 
        duration: 800, 
        once: true,
        offset: 100 // Trigger animasi sebelum elemen visible di screen
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider> {/* <-- 2. Bungkus semua di sini */}
      <Router>
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<HomePage />} />

          {/* Halaman detail project */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
