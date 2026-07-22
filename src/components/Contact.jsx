import { CALL_LINK, EMAIL_LINK, WHATSAPP_LINK } from "../data/portfolioData";
import ContactForm from "./ContactForm";

function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92" />
        </svg>
      ),
      label: "Call",
      text: "+254 794 589 612",
      href: CALL_LINK,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 6 10-6" />
        </svg>
      ),
      label: "Email",
      text: "murmorgan125@gmail.com",
      href: EMAIL_LINK,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-4.95a8.5 8.5 0 1 1 3.4 3.4z" />
          <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5.5-1 .8-1.4.5-2l-1.8-.7c-.4-.1-.7 0-.9.3l-.3.5a4.7 4.7 0 0 1-2.1-2.1l.5-.3c.3-.2.4-.5.3-.9L9.7 8.5c-.3-.3-1-.2-1.2.2z" />
        </svg>
      ),
      label: "WhatsApp",
      text: "Chat on WhatsApp",
      href: WHATSAPP_LINK,
    },
  ];

  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-card">
        <p className="section-kicker">Get in touch</p>
        <h2>Contact me</h2>
        <p>I'm available for opportunities, collaborations, and consultations. Send a message directly, or reach out through any of the channels below.</p>

        <ContactForm />

        <div className="contact-methods">
          {contactMethods.map((method) => (
            <a className="contact-method" href={method.href} key={method.label}>
              <span className="contact-icon" aria-hidden="true">
                {method.icon}
              </span>
              <span>
                <small>{method.label}</small>
                <strong>{method.text}</strong>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
