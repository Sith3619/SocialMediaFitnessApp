import React, { useState } from "react";
import "./pageStyles/contactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Your message has been sent. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-us-container fade-in">
      <h1 className="contact-us-title">Contact Us</h1>
      <div className="contact-us-content">
        <p className="contact-us-intro">
          Have any questions or need assistance? Please feel free to reach out to us at anytime!
        </p>

        {status && <p className="contact-us-status">{status}</p>}

        <form onSubmit={handleSubmit} className="contact-us-form">
          <label htmlFor="name" className="contact-us-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-us-input"
            required
          />

          <label htmlFor="email" className="contact-us-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-us-input"
            required
          />

          <label htmlFor="message" className="contact-us-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-us-textarea"
            rows="6"
            required
          />

          <button type="submit" className="contact-us-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
