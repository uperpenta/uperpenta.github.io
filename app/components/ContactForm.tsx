"use client";

import { useState, type FormEvent } from "react";

const RECIPIENT = "i.raresandrei@yahoo.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
      <div className="group">
        <label className="block font-label text-[10px] tracking-[0.2em] text-outline mb-4 transition-all group-focus-within:text-primary-container group-focus-within:translate-x-2">
          NAME_STRING
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface font-body p-0 pb-4 placeholder:text-outline-variant/50 transition-colors"
        />
      </div>
      <div className="group">
        <label className="block font-label text-[10px] tracking-[0.2em] text-outline mb-4 transition-all group-focus-within:text-primary-container group-focus-within:translate-x-2">
          EMAIL_ADDRESS
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@domain.com"
          className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface font-body p-0 pb-4 placeholder:text-outline-variant/50 transition-colors"
        />
      </div>
      <div className="group">
        <label className="block font-label text-[10px] tracking-[0.2em] text-outline mb-4 transition-all group-focus-within:text-primary-container group-focus-within:translate-x-2">
          MESSAGE_DATA
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe your vision"
          rows={4}
          className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface font-body p-0 pb-4 placeholder:text-outline-variant/50 resize-none transition-colors"
        />
      </div>
      <div className="pt-8">
        <button
          type="submit"
          className="w-full md:w-auto bg-primary-container text-on-primary font-label font-bold uppercase tracking-widest py-5 px-12 hover:bg-primary-fixed-dim hover:translate-x-1 transition-all duration-300 flex items-center justify-center gap-4 cursor-pointer"
        >
          SEND_MESSAGE
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </form>
  );
}
