function Category() {
  return (
    <>
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-brand-dark">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="#"
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border-b-4 border-brand-teal group"
          >
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition">
              <span className="text-2xl">✏️</span>
            </div>
            <h3 className="font-bold text-lg">Pencils & Pens</h3>
          </a>
          <a
            href="#"
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border-b-4 border-brand-teal group"
          >
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="font-bold text-lg">Notebooks</h3>
          </a>
          <a
            href="#"
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border-b-4 border-brand-teal group"
          >
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-bold text-lg">Art Supplies</h3>
          </a>
          <a
            href="#"
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border-b-4 border-brand-teal group"
          >
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition">
              <span className="text-2xl">🎒</span>
            </div>
            <h3 className="font-bold text-lg">Backpacks</h3>
          </a>
          {/* water pot  */}
          <a
            href="#"
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border-b-4 border-brand-teal group"
          >
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition">
              <span className="text-2xl">💧</span>
            </div>
            <h3 className="font-bold text-lg">Water Bottles</h3>
          </a>
          {/* raincoat  */}
          <a
            href="#"
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border-b-4 border-brand-teal group"
          >
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition">
              <span className="text-2xl">🌧️</span>
            </div>
            <h3 className="font-bold text-lg">Raincoats</h3>
          </a>
          {/* lunchbox  */}
          <a
            href="#"
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border-b-4 border-brand-teal group"
          >
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition">
              <span className="text-2xl">🍱</span>
            </div>
            <h3 className="font-bold text-lg">Lunchboxes</h3>
          </a>
          {/* eraser  */}
          <a
            href="#"
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center border-b-4 border-brand-teal group"
          >
            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition">
              <span className="text-2xl">🩹</span>
            </div>
            <h3 className="font-bold text-lg">Erasers</h3>
          </a>
        </div>
      </section>
    </>
  );
}
export default Category;