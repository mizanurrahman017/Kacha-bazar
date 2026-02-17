import React, { useRef } from "react";
import { NavLink } from "react-router";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_91zrwky",     // 👉 তোমার Service ID
        "template_ltdmz0q",    // 👉 তোমার Template ID
        form.current,
        "haRn69sETVjK_mls_"    // 👉 তোমার Public Key
      )
      .then(
  (result) => {
    console.log(result.text);
    alert("Message Sent Successfully ✅");
    form.current.reset();
  },
  (error) => {
    console.log(error.text);
    alert("Something went wrong ❌");
  }
);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Contact <span className="text-green-600">Us</span>
          </h1>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-lg"
            />

            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-lg"
            />

            <textarea
              name="message"
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full border px-4 py-2 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Go Home */}
        <div className="text-center">
          <NavLink to="/">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Go to Home
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Contact;
