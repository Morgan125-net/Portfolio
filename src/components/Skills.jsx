function Skills({ professionalContext, skills }) {
  return (
    <section className="section-shell skills-section">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Tools and strengths</h2>
      </div>

      <div className="context-grid">
        {professionalContext.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>

      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
