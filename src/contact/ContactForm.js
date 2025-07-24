import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";


export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('shriraj11', 'template_fdus87n', form.current, {
        publicKey: 'PHuSDH9thl87zWuL9',
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
      
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" placeholder="Enter your Name"required/>
      <label>Email</label>
      <input type="email" name="from_email"placeholder="Enter your Email" required />
      <label>phone number</label>
      <input type="number" name="phone" placeholder="Enter your phone number"pattern="[0-9]{10}" maxlength="10" required />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};


export default ContactForm;

