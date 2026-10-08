function Return_Refund_Policy() {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-brand-dark mb-4">
                Contents
              </h2>
              <nav className="space-y-1 text-sm">
                <a
                  href="#overview"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  1. Overview
                </a>
                <a
                  href="#eligibility"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  2. Return Eligibility
                </a>
                <a
                  href="#non-returnable"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  3. Non-Returnable Items
                </a>
                <a
                  href="#how-to-return"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  4. How to Initiate a Return
                </a>
                <a
                  href="#refund-process"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  5. Refund Process
                </a>
                <a
                  href="#exchanges"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  6. Exchanges
                </a>
                <a
                  href="#damaged-items"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  7. Damaged or Defective Items
                </a>
                <a
                  href="#late-refunds"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  8. Late or Missing Refunds
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-brand-teal transition"
                >
                  9. Contact Us
                </a>
              </nav>
            </div>
          </aside>

          <div className="lg:w-3/4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed space-y-8">
              <section id="overview">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  1. Overview
                </h2>
                <p>
                  At Picopeeps, we want you and your little ones to be
                  completely satisfied with your purchase. If for any reason you
                  are not happy with your order, we are here to help. This
                  Return & Refund Policy outlines the terms and conditions for
                  returning products and receiving refunds.
                </p>
                <p className="mt-3">
                  By placing an order on our website, you agree to the terms of
                  this policy. Please read it carefully before making a
                  purchase.
                </p>
              </section>

              <section id="eligibility">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  2. Return Eligibility
                </h2>
                <p>
                  To be eligible for a return, the following conditions must be
                  met:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    The item must be returned within <strong>30 days</strong> of
                    the delivery date.
                  </li>
                  <li>
                    The item must be unused, in the same condition that you
                    received it, and in its original packaging.
                  </li>
                  <li>
                    The item must include all original tags, labels, and
                    accessories.
                  </li>
                  <li>
                    A valid proof of purchase (order ID or receipt) is required.
                  </li>
                </ul>
                <p className="mt-3">
                  Items that do not meet these criteria may be refused or
                  subject to a restocking fee.
                </p>
              </section>

              <section id="non-returnable">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  3. Non-Returnable Items
                </h2>
                <p>
                  Certain items are not eligible for return for hygiene and
                  safety reasons, including:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>Personalized or custom-made items.</li>
                  <li>Items marked as "Final Sale" or "Clearance".</li>
                  <li>Gift cards.</li>
                  <li>
                    Items that have been used, damaged, or altered by the
                    customer.
                  </li>
                  <li>Digital downloads or software.</li>
                </ul>
              </section>

              <section id="how-to-return">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  4. How to Initiate a Return
                </h2>
                <p>To start a return, please follow these simple steps:</p>
                <ol className="list-decimal pl-5 mt-3 space-y-2">
                  <li>
                    Log in to your Picopeeps account and go to{" "}
                    <strong>My Orders</strong>.
                  </li>
                  <li>
                    Find the order containing the item(s) you wish to return and
                    click <strong>Return Items</strong>.
                  </li>
                  <li>Select the reason for return and submit your request.</li>
                  <li>
                    Our team will review your request and send you a Return
                    Authorization (RA) number and a prepaid shipping label via
                    email within 1-2 business days.
                  </li>
                  <li>
                    Pack the item securely in its original packaging, include
                    the RA number, and attach the shipping label to the box.
                  </li>
                  <li>Drop off the package at the nearest carrier location.</li>
                </ol>
                <p className="mt-3">
                  Please do not send items back without first obtaining a Return
                  Authorization number, as they may not be accepted.
                </p>
              </section>

              <section id="refund-process">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  5. Refund Process
                </h2>
                <p>
                  Once we receive your returned item, we will inspect it and
                  notify you of the approval or rejection of your refund. This
                  inspection process typically takes{" "}
                  <strong>5-7 business days</strong>.
                </p>
                <p className="mt-3">
                  If approved, your refund will be processed, and a credit will
                  automatically be applied to your original method of payment
                  within <strong>3-5 business days</strong>.
                </p>
                <p className="mt-3">
                  <strong>Please note:</strong> Shipping costs are
                  non-refundable unless the return is due to our error (e.g.,
                  wrong item sent, defective product).
                </p>
              </section>

              <section id="exchanges">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  6. Exchanges
                </h2>
                <p>
                  If you wish to exchange an item for a different size, color,
                  or product, the fastest way is to return the original item and
                  place a new order for the desired item. This ensures you get
                  the item you want before it sells out.
                </p>
                <p className="mt-3">
                  Alternatively, you can contact our support team to request an
                  exchange, and we will guide you through the process.
                </p>
              </section>

              <section id="damaged-items">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  7. Damaged or Defective Items
                </h2>
                <p>
                  We take great care in packaging your order, but if you receive
                  a damaged or defective item, please contact us immediately
                  (within 48 hours of delivery).
                </p>
                <p className="mt-3">
                  Please provide your order ID and clear photos of the damaged
                  item and packaging. We will arrange for a replacement or a
                  full refund, including any shipping costs, at no additional
                  charge to you.
                </p>
              </section>

              <section id="late-refunds">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  8. Late or Missing Refunds
                </h2>
                <p>
                  If you haven’t received a refund yet, please follow these
                  steps:
                </p>
                <ol className="list-decimal pl-5 mt-3 space-y-2">
                  <li>Check your bank account again.</li>
                  <li>
                    Contact your credit card company. It may take some time
                    before your refund is officially posted.
                  </li>
                  <li>
                    Contact your bank. There is often some processing time
                    before a refund is posted.
                  </li>
                </ol>
                <p className="mt-3">
                  If you’ve done all of this and still have not received your
                  refund, please contact us at{" "}
                  <a
                    href="mailto:support@picopeeps.com"
                    className="text-brand-teal font-semibold hover:underline"
                  >
                    support@picopeeps.com
                  </a>
                  .
                </p>
              </section>

              <section id="contact">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  9. Contact Us
                </h2>
                <p>
                  If you have any questions about our Return & Refund Policy,
                  please contact us:
                </p>
                <div className="mt-4 bg-gray-50 rounded-xl p-5 space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-brand-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email:{" "}
                    <a
                      href="mailto:support@picopeeps.com"
                      className="text-brand-teal font-semibold hover:underline"
                    >
                      support@picopeeps.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-brand-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Phone:{" "}
                    <a
                      href="tel:+15551234567"
                      className="text-brand-teal font-semibold hover:underline"
                    >
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-brand-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Address: 123 Rainbow Lane, Springfield, IL 62704, USA
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Return_Refund_Policy;
