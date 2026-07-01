function Skills({ professionalContext, skillGroups, skills }) {
  return (
    <section className="section-shell skills-section">
      <div className="section-heading">
        <p className="section-kicker">Explore my</p>
        <h2>Experience by technical area</h2>
      </div>

      <div className="context-grid">
        {professionalContext.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>

      <div className="skill-group-grid">
        {skillGroups.map((group) => (
          <article className="skill-group-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-items">
              {group.items.map((item) => (
                <div className="skill-item" key={item.name}>
                  <span aria-hidden="true">+</span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.level}</small>
                  </div>
                </div>
              ))}
            </div>
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
