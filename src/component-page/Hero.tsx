function Hero() {
  return (
    <>
      <header className="bg-brand-teal text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 logo-font">
              Tiny Joys Bloom
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Discover the best educational stationery for your little ones.
              Fun, safe, and creative supplies for growing minds.
            </p>
            <a
              href="#products"
              className="bg-white text-brand-teal font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 inline-block"
            >
              Shop Now
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white overflow-hidden">
              <img
                src="./hero.png"
                alt="Happy learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Hero;