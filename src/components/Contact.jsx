import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-card">
        <p className="section-kicker">Get in touch</p>
        <h2>Contact me</h2>
        <p>I'm available for opportunities, collaborations, and consultations. Send a message directly using the form below.</p>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
