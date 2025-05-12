"use client";
import { useState } from "react";

export function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [early, setEarly] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Send email via mailto (client-side, opens user's email client)
    // For production, use a backend API or service like EmailJS, SendGrid, etc.
    const subject = encodeURIComponent("World37 Demo Waitlist: " + first + " " + last);
    const body = encodeURIComponent(
      `First Name: ${first}\nLast Name: ${last}\nEmail: ${email}\nEarly Testing: ${early ? "Yes" : "No"}`
    );
    window.location.href = `mailto:llano@stanford.edu?subject=${subject}&body=${body}`;

    setSubmitting(false);
    setSubmitted(true);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative text-black">
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold text-center mb-6">Join the Waitlist</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold text-black">
            First Name:
            <input
              type="text"
              className="mt-1 w-full border rounded px-3 py-2 text-black"
              placeholder="Your First Name"
              value={first}
              onChange={e => setFirst(e.target.value)}
              required
            />
          </label>
          <label className="font-semibold text-black">
            Last Name:
            <input
              type="text"
              className="mt-1 w-full border rounded px-3 py-2 text-black"
              placeholder="Your Last Name"
              value={last}
              onChange={e => setLast(e.target.value)}
              required
            />
          </label>
          <label className="font-semibold text-black">
            Email:
            <input
              type="email"
              className="mt-1 w-full border rounded px-3 py-2 text-black"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="flex items-center gap-2 text-black">
            <input
              type="checkbox"
              checked={early}
              onChange={e => setEarly(e.target.checked)}
            />
            I want to be part of the early testing group.
          </label>
          <button
            type="submit"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition"
            disabled={submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
