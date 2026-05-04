export const STORAGE_KEYS = {
  adminUnlocked: "morgan.adminUnlocked",
  profilePhoto: "morgan.profilePhoto",
  projects: "morgan.projects",
  theme: "morgan.theme",
};

export const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || "morgan2026";
export const EMAIL_LINK = "mailto:murmorgan125@gmail.com";
export const CALL_LINK = "tel:+254794589612";
export const WHATSAPP_LINK = "https://wa.me/254794589612";

export const skills = [
  "React interfaces",
  "JavaScript",
  "Node.js APIs",
  "Express",
  "MongoDB",
  "REST workflows",
  "Responsive UI",
  "IT troubleshooting",
  "User support",
  "Technical writing",
];

export const professionalContext = [
  {
    label: "Core stack",
    value: "React / Node / MongoDB",
  },
  {
    label: "Support setting",
    value: "Hospital IT environment",
  },
];

export const services = [
  {
    title: "Web apps and dashboards",
    outcome: "Clean interfaces for real tasks",
    description:
      "I build responsive web interfaces, booking flows, dashboards, and admin tools that are easy to understand and simple to maintain.",
  },
  {
    title: "IT Support",
    outcome: "Calm troubleshooting, clear next steps",
    description:
      "I help people resolve software, hardware, connectivity, and setup issues without making the process feel more complicated than the problem.",
  },
  {
    title: "Technical documentation",
    outcome: "Readable reports, guides, and handovers",
    description:
      "I turn rough ideas, requirements, and project notes into structured documents that are clear enough to use after the work is done.",
  },
];

export const serviceDetails = [
  {
    id: "web",
    label: "Web Systems",
    title: "Websites, dashboards, and practical web tools",
    description:
      "For businesses or individuals who need a clean online presence, a booking flow, an admin area, or a custom tool that removes manual work.",
    deliverables: [
      "Responsive website or web app interface",
      "Admin dashboard and content/workflow screens",
      "API connection and database-backed features",
      "Bug fixing, cleanup, and feature improvements",
    ],
    tools: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "support",
    label: "IT Support",
    title: "Technical support for everyday operations",
    description:
      "For users and teams that need reliable troubleshooting, setup help, system checks, and clear explanations without unnecessary confusion.",
    deliverables: [
      "Software setup and configuration support",
      "Hardware and connectivity troubleshooting",
      "User guidance for common technical issues",
      "Issue documentation and follow-up recommendations",
    ],
    tools: ["Windows support", "Networking basics", "Hardware checks", "User support"],
  },
  {
    id: "writing",
    label: "Documentation",
    title: "Technical documents that are actually readable",
    description:
      "For students, clients, or teams that need reports, proposals, guides, and project documentation that is structured and easy to present.",
    deliverables: [
      "Project reports and technical write-ups",
      "User guides and process documentation",
      "Proposal and research document cleanup",
      "System explanations and handover notes",
    ],
    tools: ["Reports", "Guides", "Proposals", "Project documentation"],
  },
];

export const credibilityPoints = [
  "Practical systems, not decoration",
  "Experience supporting real users",
  "Clear handovers and documentation",
  "Responsive work across desktop and mobile",
];

export const processSteps = [
  {
    title: "Understand the real problem",
    description:
      "I clarify who the work is for, what is blocking them, and what the solution needs to do before building anything.",
  },
  {
    title: "Build the useful version first",
    description:
      "I focus on the core workflow, clean UI, sensible data flow, and features that match the actual need.",
  },
  {
    title: "Make it easy to continue",
    description:
      "I leave clear notes, explanations, and next steps so the project is easier to use, improve, or hand over.",
  },
];

export const experience = [
  {
    role: "IT Support Intern",
    company: "Hospital IT Department",
    period: "Healthcare support environment",
    description:
      "Helped hospital staff resolve computer, software, connectivity and day-to-day system issues in an environment where reliability matters.",
  },
  {
    role: "Full-Stack Developer",
    company: "Independent projects",
    period: "React, Node.js, Express, MongoDB",
    description:
      "Built full-stack project workflows with booking logic, dashboards, database integration, APIs and responsive frontends.",
  },
  {
    role: "Technical Writer",
    company: "Freelance documentation",
    period: "Reports, proposals, guides",
    description:
      "Prepared reports, proposals, project write-ups and technical explanations from rough requirements and scattered notes.",
  },
];

export const starterProjects = [
  {
    id: "hospital-booking",
    title: "Hospital Appointment Booking & Reminder System",
    category: "Full-stack healthcare system",
    summary:
      "A patient-facing booking flow and staff dashboard concept for handling appointment requests, reference IDs, rescheduling, and reminder workflows.",
    role: "Full-stack developer",
    problem:
      "Patients and staff need a clearer way to book, track, cancel, and reschedule appointments without relying on scattered manual follow-up.",
    impact:
      "Shows how appointment records, patient communication, and staff review could live in one cleaner workflow.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Twilio SMS"],
    features: [
      "Patient booking with reference IDs",
      "Admin dashboard for appointment records",
      "Cancel and reschedule workflow",
      "SMS reminder integration concept",
      "Responsive frontend and API-driven backend",
    ],
    image: "",
    imageUrl: "/projects/hospital-booking.svg",
    liveUrl: "",
    sourceUrl: "",
    caseStudyUrl: "",
  },
  {
    id: "documentation-workflow",
    title: "Technical Documentation Workflow",
    category: "Writing and documentation",
    summary:
      "A documentation workflow for turning rough project notes into proposals, reports, guides, and system handover material.",
    role: "Technical writer",
    problem:
      "Project documents often start as scattered notes, screenshots, and requirements, which makes them difficult to review or reuse.",
    impact:
      "Gives clients or teams a cleaner document structure they can present, maintain, and continue using after delivery.",
    tags: ["Reports", "Guides", "Research", "User documentation"],
    features: [
      "Clean document structure",
      "Requirements broken into readable sections",
      "Step-by-step explanations",
      "Professional formatting and review flow",
    ],
    image: "",
    imageUrl: "/projects/documentation-workflow.svg",
    liveUrl: "",
    sourceUrl: "",
    caseStudyUrl: "",
  },
];

export const emptyProject = {
  title: "",
  category: "",
  summary: "",
  role: "",
  problem: "",
  impact: "",
  tags: "",
  features: "",
  image: "",
  imageUrl: "",
  liveUrl: "",
  sourceUrl: "",
  caseStudyUrl: "",
};
