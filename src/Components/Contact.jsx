import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; 
import image from "../assets/images/undraw_contract_re_ves9.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init("L4dK2t7h3pGe2_RX0"); 
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMail = async (event) => {
    event.preventDefault();
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !message || !subject || !phone) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await emailjs.send("service_px2iqxi", "template_pv4sf5r", formData);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      alert("Your message was sent successfully!");
    } catch (error ) {
      alert("An error occurred while sending your message, please try again.");
      console.error(error);
    }
  };

  return (
    <section className="contact" id="Contact">
      <h2 className="heading">Contact<span>Me</span></h2>
      <div className="content">
        <div>
          <img
            loading="lazy"
            title="Contact"
            alt="Contact Photo"
            src={image}
            className="contact-img"
          />
        </div>
        <form id="contact-form" onSubmit={sendMail}>
          <div className="input-box">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              name="phone"
              placeholder="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              name="subject"
              placeholder="Email Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="button button-dot"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
