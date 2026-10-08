function AboutUs() {
  return (
    <>
      <header className="bg-brand-teal text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold logo-font mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            We believe that learning should be as colorful and joyful as
            childhood itself.
          </p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16">
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white h-80 md:h-[450px]">
              <img
                src="https://placehold.co/800x600/1BC0B6/FFFFFF?text=Our+Story"
                alt="Kids learning with Picopeeps"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-brand-teal font-bold tracking-wider uppercase text-sm mb-2 block">
              About Picopeeps
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark logo-font mb-6">
              Tiny Joys Bloom with Every Creation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Picopeeps was born out of a simple observation: children learn
              best when they are having fun. As parents and educators ourselves,
              we struggled to find high-quality, safe, and visually appealing
              stationery that could keep up with the boundless imagination of a
              child.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We decided to create a brand that bridges the gap between
              education and play. Every product we design is crafted with little
              hands in mind—from ergonomic pencils that help develop a proper
              grip to notebooks that spark creativity with every blank page.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Picopeeps is proud to be a part of homes, classNamerooms,
              and learning spaces around the world, bringing a splash of color
              and a whole lot of joy to everyday learning.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-brand-teal font-bold tracking-wider uppercase text-sm mb-2 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark logo-font">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition group">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-teal transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-brand-teal group-hover:text-white transition"
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
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Safety First
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                All our products are made from non-toxic, child-safe materials
                that meet international safety standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition group">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-teal transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-brand-teal group-hover:text-white transition"
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
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Eco-Friendly
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are committed to sustainability. Our packaging is recyclable,
                and we source wood from responsibly managed forests.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition group">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-teal transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-brand-teal group-hover:text-white transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                Creative Learning
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We design products that inspire imagination, helping children
                express themselves through art and writing.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-dark rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold logo-font mb-4">
              Ready to Start the Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Explore our collection of educational stationery and let your
              little one's creativity bloom.
            </p>
            <a
              href="products.html"
              className="bg-brand-teal text-white font-bold py-3 px-10 rounded-full hover:bg-teal-600 transition shadow-lg shadow-teal-900/50 inline-flex items-center gap-2"
            >
              Shop All Products
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
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutUs;