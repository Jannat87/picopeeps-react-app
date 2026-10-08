function Checkout() {
  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-brand-dark logo-font">
            Checkout
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Please fill in the details below to complete your purchase.
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-10">
        <form action="order-confirmation.html" method="POST">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3 space-y-8">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-50 text-brand-teal rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-50 text-brand-teal rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="first-name"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                    />
                  </div>
                  <div>
                    <label
                      for="last-name"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                    />
                  </div>
                  <div>
                    <label
                      for="city"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Springfield"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                    />
                  </div>
                  <div>
                    <label
                      for="state"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="IL"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                    />
                  </div>
                  <div>
                    <label
                      for="zip"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="62704"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                    />
                  </div>
                  <div>
                    <label
                      for="country"
                      className="block text-sm font-semibold text-brand-dark mb-2"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm bg-white"
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-teal-50 text-brand-teal rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Payment Method
                </h2>

                <div className="space-y-4">
                  <label className="flex items-center gap-4 p-4 border border-brand-teal rounded-xl cursor-pointer bg-teal-50/50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked
                      className="w-5 h-5 accent-brand-teal"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-brand-dark block">
                        Credit / Debit Card
                      </span>
                      <span className="text-xs text-gray-500">
                        Pay securely with your Visa, Mastercard, or Amex.
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-5 bg-blue-600 rounded"></div>
                      <div className="w-8 h-5 bg-red-500 rounded"></div>
                      <div className="w-8 h-5 bg-yellow-500 rounded"></div>
                    </div>
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 border-l-2 border-brand-teal ml-2">
                    <div className="md:col-span-2">
                      <label
                        for="card-number"
                        className="block text-sm font-semibold text-brand-dark mb-2"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="card-number"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                      />
                    </div>
                    <div>
                      <label
                        for="expiry"
                        className="block text-sm font-semibold text-brand-dark mb-2"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                      />
                    </div>
                    <div>
                      <label
                        for="cvc"
                        className="block text-sm font-semibold text-brand-dark mb-2"
                      >
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-brand-teal transition">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      className="w-5 h-5 accent-brand-teal"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-brand-dark block">
                        PayPal
                      </span>
                      <span className="text-xs text-gray-500">
                        Pay using your PayPal account.
                      </span>
                    </div>
                    <div className="w-10 h-6 bg-blue-800 rounded flex items-center justify-center text-white text-[10px] font-bold">
                      PayPal
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-brand-teal transition">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      className="w-5 h-5 accent-brand-teal"
                    />
                    <div className="flex-1">
                      <span className="font-bold text-brand-dark block">
                        Cash on Delivery
                      </span>
                      <span className="text-xs text-gray-500">
                        Pay with cash when your order arrives.
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 sticky top-24">
                <h2 className="text-xl font-bold text-brand-dark mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="https://placehold.co/100x100/CCCCCC/666666?text=Item+1"
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-dark text-sm">
                        Colorful Pencil Set
                      </h4>
                      <p className="text-xs text-gray-500">Qty: 1</p>
                    </div>
                    <div className="font-semibold text-brand-dark text-sm">
                      $12.00
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="https://placehold.co/100x100/CCCCCC/666666?text=Item+2"
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-dark text-sm">
                        Dinosaur Notebook
                      </h4>
                      <p className="text-xs text-gray-500">Qty: 2</p>
                    </div>
                    <div className="font-semibold text-brand-dark text-sm">
                      $16.00
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="https://placehold.co/100x100/CCCCCC/666666?text=Item+3"
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-dark text-sm">
                        Kids Backpack
                      </h4>
                      <p className="text-xs text-gray-500">Qty: 1</p>
                    </div>
                    <div className="font-semibold text-brand-dark text-sm">
                      $25.00
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-brand-teal text-sm"
                  />
                  <button
                    type="button"
                    className="bg-brand-dark text-white font-semibold px-4 py-2 rounded-xl hover:bg-gray-700 transition text-sm"
                  >
                    Apply
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-3 text-sm mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>$53.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-brand-dark text-lg pt-3 border-t border-gray-100">
                    <span>Total</span>
                    <span className="text-brand-teal">$53.00</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-teal text-white font-bold py-4 px-6 rounded-full hover:bg-teal-600 transition shadow-lg shadow-teal-200 flex items-center justify-center gap-2 mb-4"
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Place Order
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-brand-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Secure Checkout
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-brand-teal"
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
                    30-Day Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
export default Checkout;
