     export const STORAGE_KEYS = {
  projects: "morgan.projects",
  theme: "morgan.theme",
};

export const REQUEST_CV_LINK = "mailto:murmorgan125@gmail.com?subject=CV%20request";

export const skills = [
  "React.js & Front-End Development",
  "JavaScript (ES6+)",
  "Node.js & Express API Development",
  "Database Design & Management",
  "RESTful API Integration",
  "Responsive & Accessible UI Design",
  "IT Systems & Network Troubleshooting",
  "End-User Technical Support",
  "Technical Writing & Documentation",
  "Cross-Functional Collaboration",
];

export const professionalContext = [
  {
    label: "Full-Stack Development",
    value: "React / Node.js / SQL & NoSQL Databases",
  },
  {
    label: "Support Environment",
    value: "Healthcare IT (Hospital setting)",
  },
];

export const aboutHighlights = [
  {
    label: "Experience",
    value: "Healthcare IT support and independent web projects",
  },
  {
    label: "Focus",
    value: "Web systems, technical support, and documentation",
  },
  {
    label: "Delivery",
    value: "Clear communication, maintainable work, and useful handover notes",
  },
];

export const skillGroups = [
  {
    title: "Front-end",
    items: [
      { name: "React.js", level: "Experienced" },
      { name: "JavaScript", level: "Experienced" },
      { name: "Responsive UI", level: "Experienced" },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", level: "Working knowledge" },
      { name: "Express APIs", level: "Working knowledge" },
      { name: "Database Design", level: "Working knowledge" },
    ],
  },
  {
    title: "Support & Writing",
    items: [
      { name: "Troubleshooting", level: "Experienced" },
      { name: "End-user Support", level: "Experienced" },
      { name: "Technical Documentation", level: "Experienced" },
    ],
  },
];

export const services = [
  {
    title: "Web Applications & Dashboards",
    outcome: "Functional, user-focused tools that solve real business problems",
    description:
      "I design and develop responsive web interfaces, booking systems, data dashboards, and admin panels that prioritize usability, performance, and long-term maintainability.",
  },
  {
    title: "IT Support & Systems Assistance",
    outcome: "Reliable troubleshooting with clear communication",
    description:
      "I help individuals and teams resolve software, hardware, connectivity, and setup issues efficiently, reducing downtime and ensuring users can return to work quickly.",
  },
  {
    title: "Technical Documentation & Reporting",
    outcome: "Well-structured documents that communicate clearly",
    description:
      "I translate complex requirements, rough notes, and project specifications into professional reports, user guides, proposals, and handover documentation that stakeholders can actually use.",
  },
];

export const serviceDetails = [
  {
    id: "web",
    label: "Web Systems",
    title: "Custom websites, dashboards, and practical web tools",
    description:
      "For businesses and organizations that need a professional online presence, streamlined booking workflows, admin dashboards, or internal tools that eliminate manual processes.",
    deliverables: [
      "Responsive website or web application interface",
      "Admin dashboard with content and workflow management",
      "API integration and database-driven features",
      "Code review, bug fixes, and feature enhancements",
    ],
    tools: ["React", "JavaScript", "Node.js", "Express", "Databases"],
  },
  {
    id: "support",
    label: "IT Support",
    title: "Technical support that keeps operations running smoothly",
    description:
      "For teams and users who need prompt, reliable troubleshooting, system setup assistance, and clear explanations, without unnecessary technical jargon.",
    deliverables: [
      "Software installation, configuration, and updates",
      "Hardware diagnostics and network connectivity support",
      "User training and guidance on common technical issues",
      "Incident documentation and follow-up recommendations",
    ],
    tools: ["Windows Administration", "Networking Fundamentals", "Hardware Diagnostics", "End-User Support"],
  },
  {
    id: "writing",
    label: "Documentation",
    title: "Technical documents designed for clarity and usability",
    description:
      "For clients, students, and teams that need polished reports, user guides, project proposals, and system documentation that is easy to read, present, and maintain.",
    deliverables: [
      "Technical reports and research write-ups",
      "User guides and standard operating procedures",
      "Project proposals and business documentation",
      "System architecture explanations and handover notes",
    ],
    tools: ["Technical Reports", "User Guides", "Proposals", "Process Documentation"],
  },
];

export const credibilityPoints = [
  "Results-driven development, not just aesthetics",
  "Proven experience supporting real users in high-stakes environments",
  "Clear, professional documentation and knowledge transfer",
  "Responsive, accessible design across desktop and mobile",
];

export const processSteps = [
  {
    title: "Discovery & Problem Definition",
    description:
      "I begin by understanding the user, the pain points, and the desired outcome. This ensures the solution addresses the actual need, not just the symptoms.",
  },
  {
    title: "Build the Core Solution",
    description:
      "I focus on delivering a functional, clean, and well-structured product, prioritizing the essential workflow, intuitive interface, and reliable performance.",
  },
  {
    title: "Deliver & Document",
    description:
      "I provide clear documentation, explain key decisions, and outline next steps so the project can be easily used, maintained, or handed over to another team.",
  },
];

export const experience = [
  {
    role: "IT Support Specialist",
    company: "Hospital IT Department",
    dates: "[Add dates — e.g. Jan 2024 – Present]",
    context: "Healthcare IT Environment",
    description:
      "Provided on-site technical support to clinical and administrative staff in a high-pressure hospital environment. Resolved software, hardware, and network issues promptly, minimizing downtime and ensuring continuity of patient care. Documented incidents and solutions to improve team knowledge and response times.",
  },
  {
    role: "Full-Stack Developer",
    company: "Independent Projects & Freelance",
    dates: "[Add dates]",
    context: "React, Node.js, Express, Database Systems",
    description:
      "Designed and built full-stack web applications including booking systems, data dashboards, and admin portals. Integrated RESTful APIs, managed database schemas, and delivered responsive, accessible front-end interfaces tailored to client requirements.",
  },
  {
    role: "Technical Writer & Documentarian",
    company: "Freelance & Project-Based",
    dates: "[Add dates]",
    context: "Reports, Proposals, User Guides",
    description:
      "Developed clear, structured technical documentation from raw requirements and scattered notes. Produced project reports, user guides, proposal documents, and system handover notes that improved knowledge sharing and reduced onboarding time for stakeholders.",
  },
];

export const projects = [
  {
    id: "hospital-booking",
    title: "Hospital Appointment Booking & Reminder System",
    category: "Full-Stack Healthcare Application",
    summary:
      "A patient-facing booking portal and staff admin dashboard designed to streamline appointment management. Features include reference ID tracking, rescheduling workflows, and SMS reminder integration to reduce no-show rates.",
    role: "Full-Stack Developer",
    problem:
      "Patients and staff relied on fragmented manual processes for booking, tracking, and rescheduling appointments, leading to missed appointments and administrative inefficiency.",
    impact:
      "Demonstrated a unified workflow that centralized appointment management, improved patient communication, and reduced administrative overhead through automation.",
    tags: ["React", "Node.js", "Express", "Database Systems", "Twilio SMS"],
    features: [
      "Patient self-service booking with unique reference IDs",
      "Admin dashboard with full appointment record management",
      "Cancel and reschedule functionality",
      "SMS reminder integration for appointment adherence",
      "Responsive front-end with API-driven back-end architecture",
    ],
    image: "",
    imageUrl: "/projects/booking.webp",
    galleryImages: [
      "/projects/login.webp",
      "/projects/admin-portal.webp",
      "/projects/staff-portal.webp",
      "/projects/doctors-portal.webp",
    ],
    liveUrl: "https://hospital-xzlo.vercel.app", // spotted in your own booking.png screenshot — confirm it still resolves
    sourceUrl: "", // TODO: add a link to this project's GitHub repo if it's public
    caseStudyUrl: "",
  },
];
