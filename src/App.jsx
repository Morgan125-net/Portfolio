import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import defaultProfilePhoto from "./assets/profile.png";
import {
  aboutHighlights,
  credibilityPoints,
  experience,
  processSteps,
  professionalContext,
  projects,
  serviceDetails,
  services,
  skills,
  skillGroups,
  STORAGE_KEYS,
} from "./data/portfolioData";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.theme) || "light");
  const [activeServiceId, setActiveServiceId] = useState(serviceDetails[0].id);

  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);
  const activeService = serviceDetails.find((service) => service.id === activeServiceId);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  }

  return (
    <main className="portfolio" data-theme={theme}>
      <Header onThemeToggle={toggleTheme} theme={theme} />

      <Hero credibilityPoints={credibilityPoints} profilePhoto={defaultProfilePhoto} />
      <About highlights={aboutHighlights} />
      <Services
        activeService={activeService}
        activeServiceId={activeServiceId}
        onServiceChange={setActiveServiceId}
        serviceDetails={serviceDetails}
        services={services}
      />
      <Experience experience={experience} />
      <Process processSteps={processSteps} />
      <Projects featuredProject={featuredProject} remainingProjects={remainingProjects} />
      <Skills professionalContext={professionalContext} skillGroups={skillGroups} skills={skills} />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
