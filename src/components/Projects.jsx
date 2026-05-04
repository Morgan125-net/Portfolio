import ProjectVisual from "./ProjectVisual";

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
        <label>
          Project title
          <input
            name="title"
            value={draft.title}
            onChange={onChange}
            placeholder="Inventory Management Dashboard"
            required
          />
        </label>

        <label>
          Category
          <input
            name="category"
            value={draft.category}
            onChange={onChange}
            placeholder="Full-stack web app"
          />
        </label>

        <label className="full-field">
          Short summary
          <textarea
            name="summary"
            value={draft.summary}
            onChange={onChange}
            placeholder="What the project does, who it helps, and what problem it solves."
            required
          />
        </label>

        <label>
          Your role
          <input
            name="role"
            value={draft.role}
            onChange={onChange}
            placeholder="Full-stack developer"
          />
        </label>

        <label>
          Problem solved
          <input
            name="problem"
            value={draft.problem}
            onChange={onChange}
            placeholder="Manual tracking was slow and unclear"
          />
        </label>

        <label className="full-field">
          Result or impact
          <textarea
            name="impact"
            value={draft.impact}
            onChange={onChange}
            placeholder="Example: reduced manual tracking, improved reporting, made bookings easier, or made support faster."
          />
        </label>

        <label>
          Tech tags
          <input
            name="tags"
            value={draft.tags}
            onChange={onChange}
            placeholder="React, Node.js, MongoDB"
          />
        </label>

        <label>
          Permanent image path or URL
          <input
            name="imageUrl"
            value={draft.imageUrl}
            onChange={onChange}
            placeholder="/projects/project-screenshot.jpg or https://..."
          />
        </label>

        <label>
          Quick image upload
          <input type="file" accept="image/*" onChange={onImageChange} />
        </label>

        <label>
          Live demo link
          <input
            name="liveUrl"
            value={draft.liveUrl}
            onChange={onChange}
            placeholder="https://example.com"
          />
        </label>

        <label>
          Source code link
          <input
            name="sourceUrl"
            value={draft.sourceUrl}
            onChange={onChange}
            placeholder="https://github.com/..."
          />
        </label>

        <label className="full-field">
          Gallery image paths or URLs
          <textarea
            name="galleryImages"
            value={draft.galleryImages}
            onChange={onChange}
            placeholder={"/projects/login.png\n/projects/admin-portal.png"}
          />
        </label>

        <label className="full-field">
          Case study or write-up link
          <input
            name="caseStudyUrl"
            value={draft.caseStudyUrl}
            onChange={onChange}
            placeholder="https://... or /case-studies/project-name"
          />
        </label>

        <label className="full-field">
          Features
          <textarea
            name="features"
            value={draft.features}
            onChange={onChange}
            placeholder={"Dashboard for admins\nUser authentication\nReport export"}
          />
        </label>
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

function ProjectMediaLink({ className, project }) {
  const imageSource = getProjectImageSource(project);

  if (!imageSource) {
    return (
      <div className={className}>
        <ProjectVisual project={project} />
      </div>
    );
  }

  return (
    <a
      aria-label={`Open ${project.title} screenshot`}
      className={`${className} project-image-link`}
      href={imageSource}
      rel="noreferrer"
      target="_blank"
    >
      <ProjectVisual project={project} />
    </a>
  );
}

function ProjectGallery({ project }) {
  const galleryImages = project.galleryImages || [];

  if (!galleryImages.length) return null;

  return (
    <div className="project-gallery" aria-label={`${project.title} screenshots`}>
      {galleryImages.map((image) => (
        <figure key={image}>
          <a href={image} rel="noreferrer" target="_blank">
            <img src={image} alt={`${project.title} screenshot`} />
          </a>
        </figure>
      ))}
    </div>
  );
}

function FeaturedProject({ isAdmin, onEdit, onRemove, project }) {
  return (
    <article className="featured-project-shell">
      <div className="featured-project">
        <ProjectMediaLink className="project-media" project={project} />

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
      <ProjectGallery project={project} />
    </article>
  );
}

function ProjectCard({ isAdmin, onEdit, onRemove, project }) {
  return (
    <article className="project-card">
      <ProjectMediaLink className="project-card-media" project={project} />
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
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading project-heading">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2>Selected projects with the problem, role, and outcome made clear</h2>
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
            onRemove={onRemoveProject}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
