import React, { useState } from "react";
import "./Contact.css";

const CONTACT_EMAIL = "noah.marquie@gmail.com";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendViaApi = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send message");
    }
  };

  // Used when the Gmail SMTP API credentials fail
  const sendViaFlowForm = async () => {
    const response = await fetch(`https://flowform.to/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New message from ${formData.name}`,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === false) {
      throw new Error(data.message || "Failed to send message");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      try {
        await sendViaApi();
      } catch (apiError) {
        console.error("API contact failed, trying FlowForm:", apiError);
        await sendViaFlowForm();
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="connect">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-box">
        <p className="contact-lead">
          Have a question, opportunity, or just want to say hello? Drop a note
          below.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
            rows={5}
          />
          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {submitted && (
            <p className="contact-success">Message sent successfully!</p>
          )}
          {error && <p className="contact-error">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
