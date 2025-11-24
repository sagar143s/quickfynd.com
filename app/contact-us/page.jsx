import React from 'react';

export default function ContactUs() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>Have questions or need support? Reach out to us using the form below or email us at <a href="mailto:support@quickfynd.com" className="text-blue-600 underline">support@quickfynd.com</a>.</p>
      <form className="mt-6 space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" className="w-full border rounded p-2" required />
        <input type="email" placeholder="Your Email" className="w-full border rounded p-2" required />
        <textarea placeholder="Your Message" className="w-full border rounded p-2" rows={4} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
