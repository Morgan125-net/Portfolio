import { useEffect, useState } from "react";
import ProjectVisual from "./ProjectVisual";

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

function FeaturedProject({ onImageOpen, project }) {
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
        </div>
      </div>
      <ProjectGallery onImageOpen={onImageOpen} project={project} />
    </article>
  );
}

function ProjectCard({ onImageOpen, project }) {
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

function Projects({ featuredProject, remainingProjects }) {
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
      </div>

      {featuredProject && (
        <FeaturedProject
          onImageOpen={handleImageOpen}
          project={featuredProject}
        />
      )}

      <div className="project-grid">
        {remainingProjects.map((project) => (
          <ProjectCard
            key={project.id}
            onImageOpen={handleImageOpen}
            project={project}
          />
        ))}
      </div>
      <ProjectImageViewer image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}

export default Projects;
