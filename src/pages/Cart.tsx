function Cart() {
  return (
    <>
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-500 border-b border-gray-100">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 border-b border-gray-100 items-center">
                <div className="col-span-1 md:col-span-6 flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/200x200/CCCCCC/666666?text=Product+1"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">
                      Colorful Pencil Set
                    </h3>
                    <p className="text-xs text-gray-500">
                      Category: Pencils & Pens
                    </p>
                    <button className="text-xs text-red-500 hover:text-red-700 font-semibold mt-1 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 text-left md:text-center">
                  <span className="md:hidden text-xs text-gray-500 font-semibold block">
                    Price:
                  </span>
                  <span className="font-semibold text-brand-dark">$12.00</span>
                </div>

                <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button className="px-3 py-1 text-gray-500 hover:text-brand-teal font-bold">
                      -
                    </button>
                    <input
                      type="text"
                      value="1"
                      className="w-8 text-center font-semibold focus:outline-none bg-transparent text-sm"
                    />
                    <button className="px-3 py-1 text-gray-500 hover:text-brand-teal font-bold">
                      +
                    </button>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 text-left md:text-right">
                  <span className="md:hidden text-xs text-gray-500 font-semibold block">
                    Total:
                  </span>
                  <span className="font-bold text-brand-teal">$12.00</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 border-b border-gray-100 items-center">
                <div className="col-span-1 md:col-span-6 flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/200x200/CCCCCC/666666?text=Product+2"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">
                      Dinosaur Notebook
                    </h3>
                    <p className="text-xs text-gray-500">Category: Notebooks</p>
                    <button className="text-xs text-red-500 hover:text-red-700 font-semibold mt-1 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 text-left md:text-center">
                  <span className="md:hidden text-xs text-gray-500 font-semibold block">
                    Price:
                  </span>
                  <span className="font-semibold text-brand-dark">$8.00</span>
                </div>

                <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button className="px-3 py-1 text-gray-500 hover:text-brand-teal font-bold">
                      -
                    </button>
                    <input
                      type="text"
                      value="2"
                      className="w-8 text-center font-semibold focus:outline-none bg-transparent text-sm"
                    />
                    <button className="px-3 py-1 text-gray-500 hover:text-brand-teal font-bold">
                      +
                    </button>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 text-left md:text-right">
                  <span className="md:hidden text-xs text-gray-500 font-semibold block">
                    Total:
                  </span>
                  <span className="font-bold text-brand-teal">$16.00</span>
                </div>
              </div>

              <div className="px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50">
                <a
                  href="products.html"
                  className="text-brand-teal font-semibold hover:underline flex items-center gap-2 text-sm"
                >
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Continue Shopping
                </a>
                <button className="bg-white border border-gray-300 text-brand-dark font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition text-sm">
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-brand-dark mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal (3 items)</span>
                  <span className="font-semibold text-brand-dark">$28.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-brand-dark">$5.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-semibold text-brand-dark">$2.00</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-brand-dark">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-brand-teal">
                    $35.00
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-teal"
                  />
                  <button className="bg-brand-dark text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm">
                    Apply
                  </button>
                </div>
              </div>

              <a
                href="checkout.html"
                className="w-full bg-brand-teal text-white font-bold py-4 rounded-full hover:bg-teal-600 transition flex items-center justify-center gap-2 shadow-lg shadow-teal-200"
              >
                Proceed to Checkout
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <div className="mt-6 flex justify-center gap-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
