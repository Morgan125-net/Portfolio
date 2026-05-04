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
          Project image
          <input type="file" accept="image/*" onChange={onImageChange} />
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

function FeaturedProject({ isAdmin, onEdit, onRemove, project }) {
  return (
    <article className="featured-project">
      <div className="project-media">
        <ProjectVisual project={project} />
      </div>

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

        {isAdmin && (
          <OwnerProjectActions
            label="featured project"
            onEdit={() => onEdit(project)}
            onRemove={() => onRemove(project.id)}
          />
        )}
      </div>
    </article>
  );
}

function ProjectCard({ isAdmin, onEdit, onRemove, project }) {
  return (
    <article className="project-card">
      <div className="project-card-media">
        <ProjectVisual project={project} />
      </div>
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
