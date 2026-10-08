function My_Account() {
  return (
    <>
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="bg-brand-teal p-6 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-teal font-bold text-3xl border-4 border-white shadow-md mx-auto mb-3">
                  JD
                </div>
                <h2 className="text-white font-bold text-lg">John Doe</h2>
                <p className="text-teal-100 text-sm">john.doe@example.com</p>
              </div>

              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-50 text-brand-teal font-semibold"
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
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="my-orders.html"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition"
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
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="wishlist.html"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition"
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      href="addresses.html"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition"
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Addresses
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-details.html"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition"
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Account Details
                    </a>
                  </li>
                  <li className="pt-4 mt-4 border-t border-gray-100">
                    <a
                      href="login.html"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition font-semibold"
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
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-brand-teal"
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
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">
                    Total Orders
                  </p>
                  <p className="text-2xl font-bold text-brand-dark">12</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-brand-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">
                    Wishlist Items
                  </p>
                  <p className="text-2xl font-bold text-brand-dark">5</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-brand-teal"
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
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">
                    Saved Addresses
                  </p>
                  <p className="text-2xl font-bold text-brand-dark">2</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-brand-dark">
                  Recent Orders
                </h2>
                <a
                  href="my-orders.html"
                  className="text-brand-teal text-sm font-semibold hover:underline"
                >
                  View All
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-semibold">
                    <tr>
                      <th className="px-6 py-3">Order ID</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Total</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-semibold text-brand-dark">
                        #ORD-2023-001
                      </td>
                      <td className="px-6 py-4 text-gray-500">Oct 12, 2023</td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-brand-dark">
                        $35.00
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="order-details.html"
                          className="text-brand-teal font-semibold hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-semibold text-brand-dark">
                        #ORD-2023-002
                      </td>
                      <td className="px-6 py-4 text-gray-500">Sep 28, 2023</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                          Delivered
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-brand-dark">
                        $22.00
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="order-details.html"
                          className="text-brand-teal font-semibold hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-semibold text-brand-dark">
                        #ORD-2023-003
                      </td>
                      <td className="px-6 py-4 text-gray-500">Aug 15, 2023</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                          Delivered
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-brand-dark">
                        $48.00
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="order-details.html"
                          className="text-brand-teal font-semibold hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-brand-dark">
                  Your Wishlist
                </h2>
                <a
                  href="wishlist.html"
                  className="text-brand-teal text-sm font-semibold hover:underline"
                >
                  View All
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                <div className="flex gap-4 items-center p-3 rounded-xl border border-gray-100 hover:border-brand-teal transition">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/100x100/CCCCCC/666666?text=Item+1"
                      alt="Wishlist Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-brand-dark text-sm truncate">
                      Watercolor Set
                    </h3>
                    <p className="text-brand-teal font-bold text-sm">$15.00</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-4 items-center p-3 rounded-xl border border-gray-100 hover:border-brand-teal transition">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/100x100/CCCCCC/666666?text=Item+2"
                      alt="Wishlist Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-brand-dark text-sm truncate">
                      Kids Backpack
                    </h3>
                    <p className="text-brand-teal font-bold text-sm">$25.00</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-4 items-center p-3 rounded-xl border border-gray-100 hover:border-brand-teal transition">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="https://placehold.co/100x100/CCCCCC/666666?text=Item+3"
                      alt="Wishlist Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-brand-dark text-sm truncate">
                      Glitter Gel Pens
                    </h3>
                    <p className="text-brand-teal font-bold text-sm">$10.00</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition">
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default My_Account;
