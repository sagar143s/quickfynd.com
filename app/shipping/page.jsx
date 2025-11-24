import React from 'react';

export default function Shipping() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shipping Policy</h1>
      <p>We strive to deliver your orders quickly and efficiently. Please review our shipping policy below:</p>
      <ul className="list-disc ml-6 my-4">
        <li>Orders are processed within 1-2 business days, excluding weekends and holidays.</li>
        <li>Delivery times may vary based on location, courier availability, and unforeseen circumstances.</li>
        <li>Shipping charges are calculated at checkout and are non-refundable once the order is shipped, except in cases of our error.</li>
        <li>We are not responsible for delays caused by external factors such as weather, customs, or courier issues.</li>
        <li>Customers are responsible for providing accurate shipping information. Incorrect addresses may result in delays or additional charges.</li>
        <li>Tracking information will be provided once your order is shipped.</li>
        <li>For shipping inquiries, contact <a href="/contact-us" className="text-blue-600 underline">Contact Us</a>.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">International Shipping</h2>
      <p className="mb-4">We offer international shipping to select countries. Additional customs fees, taxes, or import duties may apply and are the responsibility of the customer.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Damaged or Lost Packages</h2>
      <p className="mb-4">If your package is lost or arrives damaged, please contact us within 48 hours of delivery for assistance.</p>
    </div>
  );
}
