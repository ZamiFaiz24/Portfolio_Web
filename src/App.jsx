import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Halaman utama
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ExperienceEducation from "./components/sections/ExperienceEducation";
import Services from "./components/sections/Service";
import Portfolio from "./components/sections/Porto";
import Sertifikat from "./components/sections/Sertifikat";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";

// Halaman project detail dan 404 (dimuat terpisah agar halaman utama lebih ringan)
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { scrollToSection } from "./utils/scrollToSection";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const target =
      location.state?.scrollTo || location.hash.replace(/^#/, "");

    if (!target) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const timer = window.setTimeout(() => scrollToSection(target), 100);
    return () => window.clearTimeout(timer);
  }, [location.key, location.hash, location.state, location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <ExperienceEducation />
      <Services />
      <Portfolio />
      <Sertifikat />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-300">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
