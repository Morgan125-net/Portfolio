function Services({ activeService, activeServiceId, onServiceChange, serviceDetails, services }) {
  return (
    <section id="services" className="section-shell services-section">
      <div className="section-heading">
        <p className="section-kicker">Services</p>
        <h2>Focused technical help for the work people actually need done</h2>
        <p>
          I keep the service offering simple: build the tool, fix the blocker, or document the work
          properly. Each service is designed to produce something useful, not just a nice looking
          page.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <strong>{service.outcome}</strong>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className="service-detail-panel">
        <div className="service-tabs" role="tablist" aria-label="Service categories">
          {serviceDetails.map((service) => (
            <button
              className={service.id === activeServiceId ? "active" : ""}
              key={service.id}
              type="button"
              onClick={() => onServiceChange(service.id)}
            >
              {service.label}
            </button>
          ))}
        </div>

        <article className="service-detail">
          <div>
            <p className="section-kicker">Service Detail</p>
            <h3>{activeService.title}</h3>
            <p>{activeService.description}</p>
          </div>

          <div>
            <h4>What this can include</h4>
            <ul>
              {activeService.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Tools and strengths</h4>
            <div className="service-tools">
              {activeService.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
