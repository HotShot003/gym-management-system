// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const templateParams = {
        from_name: name,
        to_name: "Horizon Rise Gym", // You can customize this
        from_email: email,
        message: message,
      };
      await emailjs.send(
        "service_g7x1pyd", // Replace with your service ID
        "template_ghyfp52", // Replace with your template ID
        templateParams,
        "JbZM7UNbRrQsyTt8A" // Replace with your user ID
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
