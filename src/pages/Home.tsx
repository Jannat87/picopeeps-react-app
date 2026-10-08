import Hero from "../component-page/Hero";
import Category from "../component-page/Category";

function Home() {
  // const title = useOutletContext<string>();
  return (
    <>
      <Hero />
      <Category />
      {/* row  */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold text-brand-dark">
              Featured Products
            </h2>
            <a
              href="#"
              className="text-brand-teal font-semibold hover:underline"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src="https://placehold.co/400x400/CCCCCC/666666?text=Product+1"
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-4 left-4 bg-brand-teal text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">Colorful Pencil Set</h3>
                <p className="text-gray-500 text-sm mb-3">Stationery</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-brand-dark">
                    $12.00
                  </span>
                  <button className="bg-brand-dark text-white p-2 rounded-full hover:bg-brand-teal transition">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src="https://placehold.co/400x400/CCCCCC/666666?text=Product+2"
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Sale
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">Dinosaur Notebook</h3>
                <p className="text-gray-500 text-sm mb-3">Stationery</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-brand-dark">
                      $8.00
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-1">
                      $10.00
                    </span>
                  </div>
                  <button className="bg-brand-dark text-white p-2 rounded-full hover:bg-brand-teal transition">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src="https://placehold.co/400x400/CCCCCC/666666?text=Product+3"
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">Watercolor Set</h3>
                <p className="text-gray-500 text-sm mb-3">Art Supplies</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-brand-dark">
                    $15.00
                  </span>
                  <button className="bg-brand-dark text-white p-2 rounded-full hover:bg-brand-teal transition">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition group">
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src="https://placehold.co/400x400/CCCCCC/666666?text=Product+4"
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">Kids Backpack</h3>
                <p className="text-gray-500 text-sm mb-3">Accessories</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-brand-dark">
                    $25.00
                  </span>
                  <button className="bg-brand-dark text-white p-2 rounded-full hover:bg-brand-teal transition">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="bg-brand-dark rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
          <div className="p-10 md:p-16 md:w-1/2 text-white">
            <span className="text-brand-teal font-bold tracking-wider uppercase text-sm mb-2 block">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get 20% Off Your First Order
            </h2>
            <p className="mb-8 opacity-80">
              Sign up for our newsletter and get a discount code instantly.
              Start your little one's learning journey with PicoPeeps.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-full w-full focus:outline-none text-brand-dark"
              />
              <button
                type="submit"
                className="bg-brand-teal text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="md:w-1/2 h-64 md:h-96 w-full relative">
            <img
              src="https://placehold.co/800x600/1BC0B6/FFFFFF?text=Fun+Learning"
              alt="Promotion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
