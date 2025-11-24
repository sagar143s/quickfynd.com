import React from 'react';

export default function CancellationRefunds() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Cancellation & Refunds Policy</h1>
      <p>We value your satisfaction. If you wish to cancel your order or request a refund, please review our policy below:</p>
      <ul className="list-disc ml-6 my-4">
        <li>Orders can be cancelled within 24 hours of placement, provided they have not been shipped.</li>
        <li>Refunds are processed within 7 business days after approval.</li>
        <li>Refunds are issued to the original payment method only.</li>
        <li>Products must be returned in original condition and packaging to be eligible for a refund.</li>
        <li>Shipping charges are non-refundable unless the return is due to our error.</li>
        <li>Items that are damaged, used, or not in their original packaging may not be eligible for a refund.</li>
        <li>Return shipping costs are the responsibility of the customer unless the return is due to our error.</li>
        <li>Sale or clearance items are not eligible for return or refund unless defective.</li>
        <li>For any issues, contact our support team at <a href="/contact-us" className="text-blue-600 underline">Contact Us</a>.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How to Request a Refund</h2>
      <p className="mb-4">To request a refund, please contact our support team with your order number and reason for return. We will provide instructions for returning your item.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Exceptions</h2>
      <p className="mb-4">Certain products, such as perishable goods, personalized items, or digital downloads, may not be eligible for return or refund. Please check the product description for details.</p>
    </div>
  );
}
