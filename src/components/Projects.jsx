import { useEffect, useState } from "react";
import ProjectVisual from "./ProjectVisual";

const PROJECT_FIELDS = [
  { name: "title", label: "Project title", placeholder: "Inventory Management Dashboard", required: true },
  { name: "category", label: "Category", placeholder: "Full-stack web app" },
  { name: "summary", label: "Short summary", placeholder: "What the project does, who it helps, and what problem it solves.", full: true, multiline: true, required: true },
  { name: "role", label: "Your role", placeholder: "Full-stack developer" },
  { name: "problem", label: "Problem solved", placeholder: "Manual tracking was slow and unclear" },
  { name: "impact", label: "Result or impact", placeholder: "Example: reduced manual tracking, improved reporting, made bookings easier, or made support faster.", full: true, multiline: true },
  { name: "tags", label: "Tech tags", placeholder: "React, Node.js, Express" },
  { name: "imageUrl", label: "Permanent image path or URL", placeholder: "/projects/project-screenshot.jpg or https://..." },
  { name: "imageUpload", label: "Quick image upload", type: "file" },
  { name: "liveUrl", label: "Live demo link", placeholder: "https://example.com" },
  { name: "sourceUrl", label: "Source code link", placeholder: "https://github.com/..." },
  { name: "galleryImages", label: "Gallery image paths or URLs", placeholder: "/projects/login.png\n/projects/admin-portal.png", full: true, multiline: true },
  { name: "caseStudyUrl", label: "Case study or write-up link", placeholder: "https://... or /case-studies/project-name", full: true },
  { name: "features", label: "Features", placeholder: "Dashboard for admins\nUser authentication\nReport export", full: true, multiline: true },
];

function ProjectForm({
  draft,
  editingProjectId,
  onCancelEdit,
  onChange,
  onImageChange,
  onRemoveImage,
  onReset,
  onSubmit,
}) {
  return (
    <form className="project-manager" onSubmit={onSubmit}>
      <div className="form-header">
        <div>
          <p className="section-kicker">Project Manager</p>
          <h3>{editingProjectId ? "Edit portfolio project" : "Add a new portfolio project"}</h3>
          <p className="manager-note">
            {editingProjectId
              ? "Update the details and save. This edits the existing project."
              : "Add the useful details first. The newest project becomes the featured case study."}
          </p>
        </div>
        <div className="manager-actions">
          {editingProjectId && (
            <button type="button" className="text-button" onClick={onCancelEdit}>
              Cancel edit
            </button>
          )}
          <button type="button" className="text-button" onClick={onReset}>
            Reset examples
          </button>
        </div>
      </div>

      <div className="form-grid">
        {PROJECT_FIELDS.map(({ full, label, multiline, ...field }) => {
          if (field.type === "file") {
            return (
              <label key={field.name}>
                {label}
                <input type="file" accept="image/*" onChange={onImageChange} />
              </label>
            );
          }

          const Field = multiline ? "textarea" : "input";

          return (
            <label className={full ? "full-field" : undefined} key={field.name}>
              {label}
              <Field {...field} value={draft[field.name]} onChange={onChange} />
            </label>
          );
        })}
      </div>

      {draft.image && (
        <div className="draft-preview-block">
          <div className="draft-preview">
            <img src={draft.image} alt="Project preview" />
          </div>
          <button className="text-button danger" type="button" onClick={onRemoveImage}>
            Remove project image
          </button>
        </div>
      )}
      <div className="form-actions">
        <button className="button button-primary" type="submit">
          {editingProjectId ? "Save Changes" : "Save Project"}
        </button>
      </div>
    </form>
  );
}

function OwnerProjectActions({ label = "project", onEdit, onRemove }) {
  return (
    <div className="project-owner-actions">
      <button className="text-button" type="button" onClick={onEdit}>
        Edit {label}
      </button>
      <button className="text-button danger" type="button" onClick={onRemove}>
        Remove {label}
      </button>
    </div>
  );
}

function ProjectLinks({ project }) {
  const links = [
    { href: project.liveUrl, label: "Live demo" },
    { href: project.sourceUrl, label: "Source" },
    { href: project.caseStudyUrl, label: "Case study" },
  ].filter((link) => link.href);

  if (!links.length) return null;

  return (
    <div className="project-links" aria-label={`${project.title} links`}>
      {links.map((link) => (
        <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
          {link.label}
        </a>
      ))}
    </div>
  );
}

function getProjectImageSource(project) {
  return project.image || project.imageUrl || project.galleryImages?.[0] || "";
}

function ProjectMediaButton({ className, onImageOpen, project }) {
  const imageSource = getProjectImageSource(project);

  if (!imageSource) {
    return (
      <div className={className}>
        <ProjectVisual project={project} />
      </div>
    );
  }

  return (
    <button
      aria-label={`Open ${project.title} screenshot`}
      className={`${className} project-image-link`}
      onClick={() => onImageOpen(imageSource, `${project.title} screenshot`)}
      type="button"
    >
      <ProjectVisual project={project} />
    </button>
  );
}

function ProjectGallery({ onImageOpen, project }) {
  const galleryImages = project.galleryImages || [];

  if (!galleryImages.length) return null;

  return (
    <div className="project-gallery" aria-label={`${project.title} screenshots`}>
      {galleryImages.map((image) => (
        <figure key={image}>
          <button
            aria-label={`Open ${project.title} screenshot`}
            onClick={() => onImageOpen(image, `${project.title} screenshot`)}
            type="button"
          >
            <img src={image} alt={`${project.title} screenshot`} />
          </button>
        </figure>
      ))}
    </div>
  );
}

function FeaturedProject({ isAdmin, onEdit, onImageOpen, onRemove, project }) {
  return (
    <article className="featured-project-shell">
      <div className="featured-project">
        <ProjectMediaButton
          className="project-media"
          onImageOpen={onImageOpen}
          project={project}
        />

        <div className="project-copy">
          <p className="section-kicker">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>

          <div className="case-facts" aria-label={`${project.title} case study facts`}>
            <div>
              <span>Role</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>Problem</span>
              <strong>{project.problem}</strong>
            </div>
            <div>
              <span>Outcome</span>
              <strong>{project.impact}</strong>
            </div>
          </div>

          <div className="project-meta">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <ProjectLinks project={project} />

          {isAdmin && (
            <OwnerProjectActions
              label="featured project"
              onEdit={() => onEdit(project)}
              onRemove={() => onRemove(project.id)}
            />
          )}
        </div>
      </div>
      <ProjectGallery onImageOpen={onImageOpen} project={project} />
    </article>
  );
}

function ProjectCard({ isAdmin, onEdit, onImageOpen, onRemove, project }) {
  return (
    <article className="project-card">
      <ProjectMediaButton
        className="project-card-media"
        onImageOpen={onImageOpen}
        project={project}
      />
      <div className="project-card-body">
        <p className="section-kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p className="project-problem">{project.problem}</p>
        <p className="project-card-impact">{project.impact}</p>
        <div className="project-meta">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ProjectLinks project={project} />
        {isAdmin && (
          <OwnerProjectActions
            onEdit={() => onEdit(project)}
            onRemove={() => onRemove(project.id)}
          />
        )}
      </div>
    </article>
  );
}

function ProjectImageViewer({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="image-viewer" role="dialog" aria-modal="true" aria-label={image.alt}>
      <button
        className="image-viewer-backdrop"
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
      />
      <div className="image-viewer-panel">
        <button className="image-viewer-close" type="button" onClick={onClose}>
          Close
        </button>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}

function Projects({
  draft,
  editingProjectId,
  featuredProject,
  isAdmin,
  managerOpen,
  onCancelEdit,
  onDraftChange,
  onEditProject,
  onImageChange,
  onManagerToggle,
  projectMessage,
  onRemoveImage,
  onRemoveProject,
  onResetProjects,
  onSubmitProject,
  remainingProjects,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageOpen(src, alt) {
    setSelectedImage({ src, alt });
  }

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading project-heading">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2>Selected projects showcasing real problems, clear roles, and measurable outcomes</h2>
        </div>
        {isAdmin && (
          <button
            className="button button-secondary manager-toggle"
            type="button"
            onClick={onManagerToggle}
          >
            {managerOpen ? "Close Manager" : "Add Project"}
          </button>
      )}
      </div>

      {isAdmin && projectMessage && <p className="project-message">{projectMessage}</p>}

      {isAdmin && managerOpen && (
        <ProjectForm
          draft={draft}
          editingProjectId={editingProjectId}
          onCancelEdit={onCancelEdit}
          onChange={onDraftChange}
          onImageChange={onImageChange}
          onRemoveImage={onRemoveImage}
          onReset={onResetProjects}
          onSubmit={onSubmitProject}
        />
      )}

      {featuredProject && (
        <FeaturedProject
          isAdmin={isAdmin}
          onEdit={onEditProject}
          onImageOpen={handleImageOpen}
          onRemove={onRemoveProject}
          project={featuredProject}
        />
      )}

      <div className="project-grid">
        {remainingProjects.map((project) => (
          <ProjectCard
            isAdmin={isAdmin}
            key={project.id}
            onEdit={onEditProject}
            onImageOpen={handleImageOpen}
            onRemove={onRemoveProject}
            project={project}
          />
        ))}
      </div>
      <ProjectImageViewer image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}

export default Projects;
