import { starterProjects, STORAGE_KEYS } from "../data/portfolioData";

export function projectToDraft(project) {
  return {
    title: project.title || "",
    category: project.category || "",
    summary: project.summary || "",
    role: project.role || "",
    problem: project.problem || "",
    impact: project.impact || "",
    tags: (project.tags || []).join(", "),
    features: (project.features || []).join("\n"),
    image: project.image || "",
    imageUrl: project.imageUrl || "",
    liveUrl: project.liveUrl || "",
    sourceUrl: project.sourceUrl || "",
    caseStudyUrl: project.caseStudyUrl || "",
  };
}

export function readStoredProjects() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.projects);
    const parsedProjects = saved ? JSON.parse(saved) : starterProjects;

    return parsedProjects.map((project) => ({
      role: "Project owner",
      problem: "A real workflow needed a clearer, more usable solution.",
      image: "",
      imageUrl: "",
      liveUrl: "",
      sourceUrl: "",
      caseStudyUrl: "",
      ...starterProjects.find((starterProject) => starterProject.id === project.id),
      ...project,
    }));
  } catch {
    return starterProjects;
  }
}

export function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(projects));
}

export function splitList(value, separator = ",") {
  return value
    .split(separator)
    .map((item) => item.trim())
    .filter(Boolean);
}
