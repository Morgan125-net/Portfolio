import { useMemo, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OwnerLogin from "./components/OwnerLogin";
import OwnerDock from "./components/OwnerDock";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import {
  ADMIN_PIN,
  credibilityPoints,
  emptyProject,
  experience,
  professionalContext,
  processSteps,
  serviceDetails,
  services,
  skills,
  starterProjects,
  STORAGE_KEYS,
} from "./data/portfolioData";
import { compressImage } from "./utils/imageUtils";
import { projectToDraft, readStoredProjects, saveProjects, splitList } from "./utils/projectUtils";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEYS.theme) || "dark");
  const [isAdmin, setIsAdmin] = useState(
    () => sessionStorage.getItem(STORAGE_KEYS.adminUnlocked) === "true",
  );
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [adminError, setAdminError] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(
    () => localStorage.getItem(STORAGE_KEYS.profilePhoto) || "",
  );
  const [profileMessage, setProfileMessage] = useState("");
  const [projects, setProjects] = useState(readStoredProjects);
  const [managerOpen, setManagerOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState("");
  const [draft, setDraft] = useState(emptyProject);
  const [activeServiceId, setActiveServiceId] = useState(serviceDetails[0].id);

  const featuredProject = projects[0];
  const remainingProjects = useMemo(() => projects.slice(1), [projects]);
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

  async function handleProfileUpload(event) {
    const file = event.target.files[0];
    setProfileMessage("");

    if (!file) {
      setProfileMessage("Please choose an image file to upload.");
      return;
    }

    try {
      const image = await compressImage(file);
      try {
        localStorage.setItem(STORAGE_KEYS.profilePhoto, image);
        setProfilePhoto(image);
        setProfileMessage("Profile photo saved.");
      } catch {
        setProfileMessage(
          "Unable to save your photo. Try a smaller image or check browser storage settings.",
        );
      }
      event.target.value = "";
    } catch (error) {
      setProfileMessage(error.message || "That photo could not be saved.");
    }
  }

  function handleClearProfilePhoto() {
    setProfilePhoto("");
    localStorage.removeItem(STORAGE_KEYS.profilePhoto);
    setProfileMessage("Profile photo removed.");
  }

  function handleDraftChange(event) {
    const { name, value } = event.target;
    setDraft((current) => ({ ...current, [name]: value }));
  }

  async function handleProjectImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    try {
      const image = await compressImage(file, 1400, 0.8);
      setDraft((current) => ({ ...current, image }));
      event.target.value = "";
    } catch {
      setDraft((current) => ({ ...current, image: "" }));
    }
  }

  function handleRemoveProjectImage() {
    setDraft((current) => ({ ...current, image: "" }));
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
    };

    if (editingProjectId) {
      updateProjects(
        projects.map((project) =>
          project.id === editingProjectId ? { ...project, ...projectDetails } : project,
        ),
      );
    } else {
      updateProjects([{ id: crypto.randomUUID(), ...projectDetails }, ...projects]);
    }

    handleCancelEdit();
  }

  function handleEditProject(project) {
    setDraft(projectToDraft(project));
    setEditingProjectId(project.id);
    setManagerOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleCancelEdit() {
    setDraft(emptyProject);
    setEditingProjectId("");
    setManagerOpen(false);
  }

  function handleRemoveProject(projectId) {
    updateProjects(projects.filter((project) => project.id !== projectId));

    if (editingProjectId === projectId) {
      handleCancelEdit();
    }
  }

  function handleResetProjects() {
    updateProjects(starterProjects);
    handleCancelEdit();
  }

  function handleAdminUnlock(event) {
    event.preventDefault();

    if (adminPin === ADMIN_PIN) {
      setIsAdmin(true);
      setAdminPanelOpen(false);
      setAdminPin("");
      setAdminError("");
      sessionStorage.setItem(STORAGE_KEYS.adminUnlocked, "true");
      return;
    }

    setAdminError("Wrong owner PIN.");
  }

  function handleAdminLock() {
    setIsAdmin(false);
    setManagerOpen(false);
    sessionStorage.removeItem(STORAGE_KEYS.adminUnlocked);
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

      <OwnerDock
        adminPanelOpen={adminPanelOpen}
        isAdmin={isAdmin}
        onAdminLock={handleAdminLock}
        onAdminPanelToggle={() => setAdminPanelOpen(!adminPanelOpen)}
      />

      {adminPanelOpen && !isAdmin && (
        <OwnerLogin
          adminError={adminError}
          adminPin={adminPin}
          onPinChange={setAdminPin}
          onSubmit={handleAdminUnlock}
        />
      )}

      <Hero
        credibilityPoints={credibilityPoints}
        isAdmin={isAdmin}
        onClearProfilePhoto={handleClearProfilePhoto}
        onProfileUpload={handleProfileUpload}
        profileMessage={profileMessage}
        profilePhoto={profilePhoto}
      />
      <About />
      <Services
        activeService={activeService}
        activeServiceId={activeServiceId}
        onServiceChange={setActiveServiceId}
        serviceDetails={serviceDetails}
        services={services}
      />
      <Process processSteps={processSteps} />
      <Experience experience={experience} />
      <Projects
        draft={draft}
        editingProjectId={editingProjectId}
        featuredProject={featuredProject}
        isAdmin={isAdmin}
        managerOpen={managerOpen}
        onCancelEdit={handleCancelEdit}
        onDraftChange={handleDraftChange}
        onEditProject={handleEditProject}
        onImageChange={handleProjectImage}
        onManagerToggle={handleManagerToggle}
        onRemoveImage={handleRemoveProjectImage}
        onRemoveProject={handleRemoveProject}
        onResetProjects={handleResetProjects}
        onSubmitProject={handleSubmitProject}
        remainingProjects={remainingProjects}
      />
      <Skills professionalContext={professionalContext} skills={skills} />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
