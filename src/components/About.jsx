function About({ highlights }) {
  return (
    <section id="about" className="section-shell two-column">
      <div>
        <p className="section-kicker">Get to know more</p>
        <h2>I bridge the gap between technology and the people who use it.</h2>
      </div>

      <div className="section-body">
        <div className="about-card-grid">
          {highlights.map((item) => (
            <article className="about-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>

        <p>
          Every project I take on, whether resolving a system issue, building a web application, or
          writing technical documentation, starts with the same question: <em>who is this for and what do they actually need?</em>
        </p>
        <p>
          My background combines hands-on IT support in a hospital environment, full-stack development
          with React and Node.js, and professional technical writing. This mix of disciplines means I
          can troubleshoot the problem, build the solution, and document it clearly, without hiding
          behind jargon or leaving anyone guessing.
        </p>
      </div>
    </section>
  );
}

export default About;
