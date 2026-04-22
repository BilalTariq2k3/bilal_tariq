"use client";

import { useState } from "react";
import "./Contact.css";
import Reveal from "../Animations/Reveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      return;
    }

    try {
      setIsSending(true);
      setStatusMessage("");

      const response = await fetch(
        "https://formsubmit.co/ajax/bilaltariq2k3@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _subject: `Portfolio Contact: ${subject}`,
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatusMessage("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatusMessage("Unable to send message right now. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section container" id="contact">
      <Reveal className="contact-header">
        <h2>Get In Touch</h2>
        <p>LET&apos;S COLLABORATE ON AMAZING PROJECTS</p>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-info" direction="left" delay={100}>
          <h3>Contact Information</h3>
          <p>
            <i className="bi bi-envelope-fill" />
            <span>
              <strong>Email</strong>
              <a href="mailto:Bilaltariq2k3@gmail.com">Bilaltariq2k3@gmail.com</a>
            </span>
          </p>
          <p>
            <i className="bi bi-telephone-fill" />
            <span>
              <strong>Phone</strong>
              <a href="tel:+923223376337">03223376337</a>
            </span>
          </p>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/bilal-t-336001388"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a
              href="https://github.com/BilalTariq2k3"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github" />
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" direction="right" delay={160}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={isSending}>
              <i className="bi bi-send-fill" /> {isSending ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && <p className="form-status">{statusMessage}</p>}
          </form>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <footer className="site-footer">
          © 2026 Bilal Tariq. All rights reserved.
        </footer>
      </Reveal>
    </section>
  );
}
