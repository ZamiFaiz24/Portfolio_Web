import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Halaman utama
import Navbar from "./components/common/Navbar";
import SectionDivider from "./components/common/SectionDivider";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ExperienceEducation from "./components/sections/ExperienceEducation";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import ContactCTA from "./components/sections/ContactCTA";
import DotNavigation from "./components/navigation/DotNavigation";
import Footer from "./components/common/Footer";

// Halaman project detail dan 404 (dimuat terpisah agar halaman utama lebih ringan)
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { scrollToSection } from "./utils/scrollToSection";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;

    if (target) {
      const timer = window.setTimeout(() => scrollToSection(target), 100);
      return () => window.clearTimeout(timer);
    }

    // Hash scrolling is handled by the Navbar so direct links like /#about
    // still work without this effect competing with it.
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.key, location.hash, location.state, location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500">
      <Navbar />
      <DotNavigation />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <ExperienceEducation />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <ContactCTA />
      <SectionDivider />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white text-gray-600 dark:bg-gray-950 dark:text-gray-300">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
