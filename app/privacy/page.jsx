import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
      <ul className="list-disc ml-6 my-4">
        <li>We do not share your personal data with third parties except as required by law or to fulfill your order.</li>
        <li>We use secure technologies and encryption to protect your information from unauthorized access.</li>
        <li>We may collect information such as your name, email, address, phone number, and order details to provide better service and support.</li>
        <li>Cookies and similar technologies are used to enhance your browsing experience, remember your preferences, and analyze site traffic.</li>
        <li>We may use your contact information to send you updates, offers, or important notifications. You can opt out at any time.</li>
        <li>You may request deletion, correction, or a copy of your personal data at any time by contacting us.</li>
        <li>We retain your data only as long as necessary to fulfill the purposes for which it was collected or as required by law.</li>
        <li>For privacy concerns, contact <a href="/contact-us" className="text-blue-600 underline">Contact Us</a>.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Third-Party Services</h2>
      <p className="mb-4">We may use third-party services (such as payment processors and analytics providers) that have their own privacy policies. We encourage you to review their policies before using those services.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Children's Privacy</h2>
      <p className="mb-4">Our website is not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us for removal.</p>
    </div>
  );
}
