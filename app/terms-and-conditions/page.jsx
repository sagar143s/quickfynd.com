import React from 'react';

export default function TermsConditions() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p>Welcome to Quickfynd.com. By using our website, you agree to our terms and conditions. Please read them carefully.</p>
      <ul className="list-disc ml-6 my-4">
        <li>All content is for informational purposes only and may be updated without notice.</li>
        <li>Use of our services is subject to all applicable local, state, and national laws and regulations.</li>
        <li>We reserve the right to update or change these terms at any time without prior notice. Continued use of the site constitutes acceptance of any changes.</li>
        <li>Users are responsible for maintaining the confidentiality of their account information and passwords. Any activity under your account is your responsibility.</li>
        <li>Any misuse of the website, including fraudulent activity, spamming, or abuse, may result in suspension or termination of access without refund.</li>
        <li>All purchases are subject to product availability, confirmation of the order price, and acceptance by Quickfynd.com.</li>
        <li>We reserve the right to refuse or cancel any order for any reason, including errors in pricing or product information.</li>
        <li>All intellectual property on this site, including logos, images, and content, is owned by Quickfynd.com and may not be used without permission.</li>
        <li>Links to third-party websites are provided for convenience; we are not responsible for their content or privacy practices.</li>
        <li>By using this site, you agree not to upload or transmit any harmful code, viruses, or malicious software.</li>
        <li>For questions, contact <a href="/contact-us" className="text-blue-600 underline">Contact Us</a>.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">Quickfynd.com is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our total liability is limited to the amount paid for the product or service in question.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Governing Law</h2>
      <p className="mb-4">These terms are governed by the laws of India. Any disputes will be resolved in the courts of the jurisdiction where Quickfynd.com is registered.</p>
    </div>
  );
}
