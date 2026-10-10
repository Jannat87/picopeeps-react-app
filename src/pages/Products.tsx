import { Link } from "react-router-dom";
import {useCart} from "../context/CartContext";

function Products() {
  const {addToCart} = useCart();
  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-brand-dark logo-font">
            All Products
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-brand-dark mb-4">
                Filters
              </h2>

              <div className="mb-6">
                <h3 className="font-semibold text-brand-dark mb-2">Category</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="accent-brand-teal"
                        checked
                      />{" "}
                      All Products
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-brand-teal" />{" "}
                      Pencils & Pens
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-brand-teal" />{" "}
                      Notebooks
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-brand-teal" />{" "}
                      Art Supplies
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-brand-teal" />{" "}
                      Backpacks
                    </label>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-brand-dark mb-2">
                  Price Range
                </h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-teal"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-brand-dark mb-2">
                  Availability
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-brand-teal" /> In
                      Stock
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-brand-teal" />{" "}
                      Out of Stock
                    </label>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-brand-teal text-white font-bold py-2.5 rounded-full hover:bg-teal-600 transition">
                Apply Filters
              </button>
            </div>
          </aside>

          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500 text-sm">
                Showing{" "}
                <span className="font-semibold text-brand-dark">1–8</span> of{" "}
                <span className="font-semibold text-brand-dark">24</span>{" "}
                products
              </p>
              <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-teal text-brand-dark">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100">
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src="https://placehold.co/400x400/CCCCCC/666666?text=Product+1"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <Link to="/product-details" className="absolute inset-0" />
                  <span className="absolute top-3 left-3 bg-brand-teal text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark mb-1">
                    Colorful Pencil Set
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">Pencils & Pens</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-brand-dark">
                      $12.00
                    </span>
                    <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                      In Stock
                    </span>
                  </div>
                  <button onClick="addToCart()" className="w-full bg-brand-dark text-white font-semibold py-2 rounded-full hover:bg-brand-teal transition flex items-center justify-center gap-2">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100">
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src="https://placehold.co/400x400/CCCCCC/666666?text=Product+2"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <Link to="/product-details" className="absolute inset-0" />
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Sale
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark mb-1">
                    Dinosaur Notebook
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">Notebooks</p>
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-lg font-bold text-brand-dark">
                        $8.00
                      </span>
                      <span className="text-xs text-gray-400 line-through ml-1">
                        $10.00
                      </span>
                    </div>
                    <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                      In Stock
                    </span>
                  </div>
                  <button className="w-full bg-brand-dark text-white font-semibold py-2 rounded-full hover:bg-brand-teal transition flex items-center justify-center gap-2">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100">
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src="https://placehold.co/400x400/CCCCCC/666666?text=Product+3"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <Link to="/product-details" className="absolute inset-0" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark mb-1">
                    Watercolor Set
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">Art Supplies</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-brand-dark">
                      $15.00
                    </span>
                    <span className="text-xs text-red-500 font-semibold bg-red-50 px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  </div>
                  <button className="w-full bg-gray-300 text-gray-500 font-semibold py-2 rounded-full cursor-not-allowed flex items-center justify-center gap-2">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Out of Stock
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100">
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src="https://placehold.co/400x400/CCCCCC/666666?text=Product+4"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark mb-1">
                    Kids Backpack
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">Accessories</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-brand-dark">
                      $25.00
                    </span>
                    <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                      In Stock
                    </span>
                  </div>
                  <button className="w-full bg-brand-dark text-white font-semibold py-2 rounded-full hover:bg-brand-teal transition flex items-center justify-center gap-2">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100">
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src="https://placehold.co/400x400/CCCCCC/666666?text=Product+5"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark mb-1">
                    Math Flash Cards
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">Educational</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-brand-dark">
                      $6.00
                    </span>
                    <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                      In Stock
                    </span>
                  </div>
                  <button className="w-full bg-brand-dark text-white font-semibold py-2 rounded-full hover:bg-brand-teal transition flex items-center justify-center gap-2">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100">
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src="https://placehold.co/400x400/CCCCCC/666666?text=Product+6"
                    alt="Product"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark mb-1">
                    Glitter Gel Pens
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">Pencils & Pens</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-brand-dark">
                      $10.00
                    </span>
                    <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                      In Stock
                    </span>
                  </div>
                  <button className="w-full bg-brand-dark text-white font-semibold py-2 rounded-full hover:bg-brand-teal transition flex items-center justify-center gap-2">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <nav className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-teal text-white font-semibold"
                >
                  1
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition"
                >
                  2
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition"
                >
                  3
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition"
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
