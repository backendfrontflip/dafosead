import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper.jsx'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Message submitted! (Firebase integration will come later)");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <PageWrapper>
    <div className="px-6 md:px-20 py-16 bg-white text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-red-600 p-6 rounded-xl shadow">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-red-600 font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-red-600 p-6 rounded-xl shadow space-y-4 text-white">
          <h2 className="text-2xl font-semibold mb-4">Our Branches</h2>
          <p><strong>Head Office:</strong> Lagos, Nigeria</p>
          <p><strong>Other Locations:</strong> Abuja, Port Harcourt, Enugu, Kano, Ibadan</p>
          <p><strong>Phone:</strong> +234 800 000 0000</p>
          <p><strong>Email:</strong> info@beltcompany.ng</p>
          <div className="mt-4">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=lagos,%20nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 border rounded"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default Contact;
