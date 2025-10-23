import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
  const TEMPLATE_REPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Send inquiry to you
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_CONTACT,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      // 2️⃣ Auto-reply to user
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_REPLY,
        {
          to_email: form.email,
          from_name: form.name,
        },
        PUBLIC_KEY
      );

      // 3️⃣ Log to Google Sheet (optional)
      if (GOOGLE_SHEET_URL) {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('There was an error sending your message. Check the console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-gray-300 mb-8">
          Have a question or want to work together? Send us a message and we'll get back to you within 1–2 business days.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gradient-to-b from-[#071014] to-[#071018] p-6 rounded-2xl border border-gray-800/40"
          >
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-accent-cyan outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-accent-cyan outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full bg-transparent border border-gray-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-accent-cyan outline-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-bright-cyan-button font-semibold"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-green-900/30 border border-green-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Thanks — we received your message</h2>
            <p className="text-gray-300">We'll respond to <strong className="text-white">{form.email}</strong> soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};
