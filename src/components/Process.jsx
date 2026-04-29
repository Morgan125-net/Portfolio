function Process({ processSteps }) {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Working Style</p>
        <h2>A simple working style that keeps projects moving</h2>
      </div>

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-card" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
