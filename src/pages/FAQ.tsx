function FAQ() {
  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-brand-dark mb-4">
                Categories
              </h2>
              <nav className="space-y-1">
                <a
                  href="#shopping"
                  className="block px-4 py-2.5 rounded-lg bg-teal-50 text-brand-teal font-semibold transition"
                >
                  Shopping & Products
                </a>
                <a
                  href="#shipping"
                  className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition"
                >
                  Shipping & Delivery
                </a>
                <a
                  href="#returns"
                  className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition"
                >
                  Returns & Refunds
                </a>
                <a
                  href="#payment"
                  className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition"
                >
                  Payment & Security
                </a>
                <a
                  href="#account"
                  className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition"
                >
                  Account & Orders
                </a>
              </nav>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-10">
            <section id="shopping">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-teal-50 text-brand-teal rounded-full flex items-center justify-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </span>
                Shopping & Products
              </h2>
              <div className="space-y-3">
                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    Are the stationery items safe for young children?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    Absolutely! All Picopeeps products are made from non-toxic,
                    eco-friendly materials and meet international safety
                    standards for children aged 3 and up. We prioritize safety
                    in every product we design.
                  </div>
                </details>

                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    Do you offer product bundles or gift sets?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    Yes! We offer curated gift sets for birthdays,
                    back-to-school, and holidays. You can find them under the
                    "Bundles" category on our Products page. We also offer gift
                    wrapping at checkout.
                  </div>
                </details>

                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    How do I know which products are age-appropriate?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    Each product page includes a recommended age range in the
                    description section. If you're unsure, our customer support
                    team is happy to help you choose the perfect item for your
                    child.
                  </div>
                </details>
              </div>
            </section>

            <section id="shipping">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-teal-50 text-brand-teal rounded-full flex items-center justify-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </span>
                Shipping & Delivery
              </h2>
              <div className="space-y-3">
                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    How long does shipping take?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    Standard shipping typically takes 3-5 business days within
                    the country. Express shipping takes 1-2 business days.
                    International shipping times vary by destination (usually
                    7-14 business days).
                  </div>
                </details>

                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    Do you offer free shipping?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    Yes! We offer free standard shipping on all orders over $50.
                    For orders under $50, a flat shipping fee of $5.99 applies.
                  </div>
                </details>

                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    Can I track my order?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    Yes! Once your order ships, you will receive an email with a
                    tracking number. You can also track your order anytime by
                    visiting the "Track Order" page and entering your Order ID.
                  </div>
                </details>
              </div>
            </section>

            <section id="returns">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-teal-50 text-brand-teal rounded-full flex items-center justify-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </span>
                Returns & Refunds
              </h2>
              <div className="space-y-3">
                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    What is your return policy?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    We accept returns within 30 days of delivery for unused
                    items in their original packaging. If you're not satisfied
                    with your purchase, please contact our support team to
                    initiate a return.
                  </div>
                </details>

                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    How long do refunds take to process?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    Once we receive your returned item, please allow 5-7
                    business days for inspection. After approval, refunds are
                    processed to your original payment method within 3-5
                    business days.
                  </div>
                </details>
              </div>
            </section>

            <section id="payment">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-teal-50 text-brand-teal rounded-full flex items-center justify-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </span>
                Payment & Security
              </h2>
              <div className="space-y-3">
                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    What payment methods do you accept?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    We accept all major credit and debit cards (Visa,
                    Mastercard, American Express), PayPal, and Apple Pay. All
                    transactions are securely encrypted.
                  </div>
                </details>

                <details className="bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-brand-dark hover:text-brand-teal transition">
                    Is my payment information secure?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    Yes. We use industry-standard SSL encryption to protect your
                    personal and payment information. We never store your full
                    credit card details on our servers.
                  </div>
                </details>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-16 bg-brand-dark rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold logo-font mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our friendly customer support team is here to help you with anything
            you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-brand-teal text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition inline-flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              Contact Us
            </a>
            <a
              href="#"
              className="bg-white text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition inline-flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Live Chat
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default FAQ;
