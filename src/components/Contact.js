import React from 'react';
import '../App.css';
import '../styles.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <input type="submit" value="Submit" />
      </form>
      <p>For any inquiries or feedback, please contact us at <a href="mailto:support@dictionarymaster.com">support@dictionarymaster.com</a>.</p>
    </section>
  );
}

export default Contact;
