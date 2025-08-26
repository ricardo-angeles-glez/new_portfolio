"use client";

import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! 🚀 (Hook up to API/email service)");
  };

  return (
    <main className="px-6 md:px-12 py-20 max-w-3xl mx-auto">
      <SectionTitle title="Contact" subtitle="Let’s work together" />

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
