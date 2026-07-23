import { useState } from "react";

// 1. Create a free account at https://formspree.io
// 2. Create a new form and point it at murmorgan125@gmail.com
// 3. Copy the form ID from the endpoint they give you (looks like "xzbqjkwa")
// 4. Create a .env file with VITE_FORMSPREE_FORM_ID=<your form ID>
//    and restart the Vite development server.
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "";

const STATUS = {
  idle: "idle",
  sending: "sending",
  success: "success",
  error: "error",
};

function ContactForm() {
  const [status, setStatus] = useState(STATUS.idle);

  const isConfigured = FORMSPREE_FORM_ID !== "YOUR_FORM_ID";

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isConfigured) {
      setStatus(STATUS.error);
      return;
    }

    setStatus(STATUS.sending);
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus(STATUS.success);
        form.reset();
      } else {
        setStatus(STATUS.error);
      }
    } catch {
      setStatus(STATUS.error);
    }
  }

  if (status === STATUS.success) {
    return (
      <div className="contact-form-success" role="status">
        <p>Thanks — your message is on its way. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="form-grid contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>

      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label className="full-field">
        Message
        <textarea name="message" required />
      </label>

      {status === STATUS.error && (
        <p className="full-field contact-form-error" role="alert">
          {isConfigured
            ? "Something went wrong sending that — please email me directly instead."
            : "The form isn't connected yet — please use one of the direct contact methods below for now."}
        </p>
      )}

      <div className="full-field form-actions">
        <button className="button button-primary" type="submit" disabled={status === STATUS.sending}>
          {status === STATUS.sending ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
