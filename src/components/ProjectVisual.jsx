function ProjectVisual({ project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} project preview`} />;
  }

  return (
    <div className="project-placeholder" aria-label={`${project.title} visual placeholder`}>
      <div className="placeholder-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="placeholder-metrics">
        <strong>{project.title.slice(0, 2).toUpperCase()}</strong>
        <span>{project.category || "Project preview"}</span>
      </div>
      <div className="placeholder-lines">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default ProjectVisual;
