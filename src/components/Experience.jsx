function Experience({ experience }) {
  return (
    <section id="experience" className="section-shell two-column">
      <div>
        <p className="section-kicker">Experience</p>
        <h2>Experience across IT support, full-stack development, and technical writing.</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <span>{item.period}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
