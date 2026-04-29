import { CALL_LINK, EMAIL_LINK, WHATSAPP_LINK } from "../data/portfolioData";

function Contact() {
  const contactMethods = [
    {
      icon: "☎",
      label: "Call",
      text: "+254 794 589 612",
      href: CALL_LINK,
    },
    {
      icon: "✉",
      label: "Email",
      text: "murmorgan125@gmail.com",
      href: EMAIL_LINK,
    },
    {
      icon: "◌",
      label: "WhatsApp",
      text: "Chat on WhatsApp",
      href: WHATSAPP_LINK,
    },
  ];

  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-card">
        <p className="section-kicker">Contact</p>
        <h2>Contact Information</h2>
        <p>Reach out directly through any of these channels.</p>

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
