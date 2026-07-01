import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import defaultProfilePhoto from "./assets/profile.png";
import {
  aboutHighlights,
  credibilityPoints,
  emptyProject,
  experience,
  professionalContext,
  serviceDetails,
  services,
  skills,
  skillGroups,
  starterProjects,
  STORAGE_KEYS,
} from "./data/portfolioData";
import { compressImage } from "./utils/imageUtils";
import { projectToDraft, readStoredProjects, saveProjects, splitList } from "./utils/projectUtils";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.theme) || "light");
  const [projects, setProjects] = useState(readStoredProjects);
  const [projectMessage, setProjectMessage] = useState("");
  const [managerOpen, setManagerOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState("");
  const [draft, setDraft] = useState(emptyProject);
  const [activeServiceId, setActiveServiceId] = useState(serviceDetails[0].id);

  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);
  const activeService = serviceDetails.find((service) => service.id === activeServiceId);

  function updateProjects(nextProjects) {
    setProjects(nextProjects);
    saveProjects(nextProjects);
  }

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  }

  function handleDraftChange(event) {
    const { name, value } = event.target;
    setProjectMessage("");
    setDraft((current) => ({ ...current, [name]: value }));
  }

  async function handleProjectImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    try {
      const image = await compressImage(file, 1400, 0.8);
      setDraft((current) => ({ ...current, image }));
      setProjectMessage("Project image preview added. Save the project to keep it in this browser.");
      event.target.value = "";
    } catch (error) {
      setDraft((current) => ({ ...current, image: "" }));
      setProjectMessage(error.message || "That project image could not be added.");
    }
  }

  function handleRemoveProjectImage() {
    setDraft((current) => ({ ...current, image: "" }));
    setProjectMessage("Project image preview removed.");
  }

  function handleSubmitProject(event) {
    event.preventDefault();

    if (!draft.title.trim() || !draft.summary.trim()) return;

    const projectDetails = {
      title: draft.title.trim(),
      category: draft.category.trim() || "Portfolio project",
      summary: draft.summary.trim(),
      role: draft.role.trim() || "Project owner",
      problem: draft.problem.trim() || "The workflow needed a clearer and more usable solution.",
      impact: draft.impact.trim() || "Improved the way the task is completed, understood, or maintained.",
      tags: splitList(draft.tags),
      features: splitList(draft.features, "\n"),
      image: draft.image,
      imageUrl: draft.imageUrl.trim(),
      galleryImages: splitList(draft.galleryImages, "\n"),
      liveUrl: draft.liveUrl.trim(),
      sourceUrl: draft.sourceUrl.trim(),
      caseStudyUrl: draft.caseStudyUrl.trim(),
    };

    if (editingProjectId) {
      updateProjects(
        projects.map((project) =>
          project.id === editingProjectId ? { ...project, ...projectDetails } : project,
        ),
      );
      setProjectMessage("Project updated.");
    } else {
      updateProjects([{ id: crypto.randomUUID(), ...projectDetails }, ...projects]);
      setProjectMessage("Project added.");
    }

    setDraft(emptyProject);
    setEditingProjectId("");
    setManagerOpen(false);
  }

  function handleEditProject(project) {
    setDraft(projectToDraft(project));
    setEditingProjectId(project.id);
    setProjectMessage("");
    setManagerOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleCancelEdit() {
    setDraft(emptyProject);
    setEditingProjectId("");
    setManagerOpen(false);
    setProjectMessage("");
  }

  function handleRemoveProject(projectId) {
    updateProjects(projects.filter((project) => project.id !== projectId));

    if (editingProjectId === projectId) {
      handleCancelEdit();
    } else {
      setProjectMessage("Project removed.");
    }
  }

  function handleResetProjects() {
    updateProjects(starterProjects);
    handleCancelEdit();
    setProjectMessage("Example projects restored.");
  }

  function handleManagerToggle() {
    if (managerOpen) {
      handleCancelEdit();
    } else {
      setManagerOpen(true);
    }
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
      <Projects
        draft={draft}
        editingProjectId={editingProjectId}
        featuredProject={featuredProject}
        managerOpen={managerOpen}
        onCancelEdit={handleCancelEdit}
        onDraftChange={handleDraftChange}
        onEditProject={handleEditProject}
        onImageChange={handleProjectImage}
        onManagerToggle={handleManagerToggle}
        projectMessage={projectMessage}
        onRemoveImage={handleRemoveProjectImage}
        onRemoveProject={handleRemoveProject}
        onResetProjects={handleResetProjects}
        onSubmitProject={handleSubmitProject}
        remainingProjects={remainingProjects}
      />
      <Skills professionalContext={professionalContext} skillGroups={skillGroups} skills={skills} />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
