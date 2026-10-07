function Product_Details(){    
    return(
        <>

    {/* <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 text-sm text-gray-500">
            <a href="index.html" className="hover:text-brand-teal">Home</a>
            <span className="mx-2">/</span>
            <a href="products.html" className="hover:text-brand-teal">Products</a>
            <span className="mx-2">/</span>
            <span className="text-brand-dark font-semibold">Colorful Pencil Set</span>
        </div>
    </div> */}

    
    <main className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                
                <div>
                    <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 md:h-[500px] mb-4">
                        <img id="main-image" src="https://placehold.co/600x600/CCCCCC/666666?text=Pencil+Set+Main" alt="Product" className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-gray-100 rounded-xl overflow-hidden h-24 cursor-pointer border-2 border-brand-teal">
                            <img src="https://placehold.co/200x200/CCCCCC/666666?text=View+1" alt="Thumb" className="w-full h-full object-cover"/>
                        </div>
                        <div className="bg-gray-100 rounded-xl overflow-hidden h-24 cursor-pointer border-2 border-transparent hover:border-brand-teal transition">
                            <img src="https://placehold.co/200x200/CCCCCC/666666?text=View+2" alt="Thumb" className="w-full h-full object-cover"/>
                        </div>
                        <div className="bg-gray-100 rounded-xl overflow-hidden h-24 cursor-pointer border-2 border-transparent hover:border-brand-teal transition">
                            <img src="https://placehold.co/200x200/CCCCCC/666666?text=View+3" alt="Thumb" className="w-full h-full object-cover"/>
                        </div>
                        <div className="bg-gray-100 rounded-xl overflow-hidden h-24 cursor-pointer border-2 border-transparent hover:border-brand-teal transition">
                            <img src="https://placehold.co/200x200/CCCCCC/666666?text=View+4" alt="Thumb" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>

                
                <div className="flex flex-col">
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark logo-font mb-2">Colorful Pencil Set</h1>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-yellow-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <span className="text-sm text-gray-500">(4.8) · 120 Reviews</span>
                    </div>

                    <div className="flex items-end gap-3 mb-6">
                        <span className="text-3xl font-bold text-brand-teal">$12.00</span>
                        <span className="text-xl text-gray-400 line-through mb-1">$15.00</span>
                        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded mb-2">20% OFF</span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Unleash your child's creativity with our Colorful Pencil Set. Made from non-toxic, eco-friendly materials, these pencils are perfect for drawing, coloring, and writing. The ergonomic design helps develop a proper grip for little hands.
                    </p>

                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-green-600 font-semibold text-sm">In Stock (Available: 25)</span>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold text-brand-dark mb-3">Color:</h3>
                        <div className="flex gap-3">
                            <button className="w-10 h-10 rounded-full bg-red-400 border-2 border-brand-teal ring-2 ring-offset-2 ring-brand-teal"></button>
                            <button className="w-10 h-10 rounded-full bg-blue-400 border-2 border-transparent hover:border-gray-300"></button>
                            <button className="w-10 h-10 rounded-full bg-green-400 border-2 border-transparent hover:border-gray-300"></button>
                            <button className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-transparent hover:border-gray-300"></button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div className="flex items-center border border-gray-300 rounded-full">
                            <button className="px-4 py-3 text-gray-500 hover:text-brand-teal font-bold">-</button>
                            <input type="text" value="1" className="w-12 text-center font-semibold focus:outline-none bg-transparent"/>
                            <button className="px-4 py-3 text-gray-500 hover:text-brand-teal font-bold">+</button>
                        </div>
                        <button className="flex-1 bg-brand-teal text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition flex items-center justify-center gap-2 shadow-lg shadow-teal-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to Cart
                        </button>
                        <button className="bg-white border-2 border-gray-200 text-gray-500 p-3 rounded-full hover:border-brand-teal hover:text-brand-teal transition flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>

                    <div className="border-t border-gray-100 pt-6 space-y-3 text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                            <span>Free shipping on orders over $50</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>30-day easy return policy</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>100% secure payment</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <div className="flex border-b border-gray-200 gap-8">
                    <button className="pb-4 border-b-2 border-brand-teal text-brand-teal font-bold">Description</button>
                    <button className="pb-4 border-b-2 border-transparent text-gray-500 font-semibold hover:text-brand-dark transition">Additional Info</button>
                    <button className="pb-4 border-b-2 border-transparent text-gray-500 font-semibold hover:text-brand-dark transition">Reviews (120)</button>
                </div>

                <div className="py-6 text-gray-600 leading-relaxed">
                    <h3 className="font-bold text-brand-dark text-lg mb-3">Product Description</h3>
                    <p className="mb-4">
                        The PicoPeeps Colorful Pencil Set is designed to make learning fun. Each pencil is crafted with a soft, break-resistant core and a smooth, splinter-free finish. The set includes 12 vibrant colors that inspire creativity in children aged 3 and up.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>12 vibrant, non-toxic colors</li>
                        <li>Ergonomic triangular shape for better grip</li>
                        <li>Break-resistant lead core</li>
                        <li>Made from sustainably sourced wood</li>
                        <li>Comes in a reusable storage tin</li>
                    </ul>
                    <p>
                        Perfect for school, home, or travel. Let your little one's imagination bloom with PicoPeeps!
                    </p>
                </div>
            </div>

        </div>
    </main>
        </>
    )
}
 
export default Product_Details;