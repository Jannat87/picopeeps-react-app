function Order_Details() {
  return (
    <>
        <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
            
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-brand-dark logo-font">Order Details</h1>
                    <p className="text-gray-500 text-sm mt-1">Order placed on Oct 24, 2023</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full">Delivered</span>
                    <a href="#" className="text-brand-teal text-sm font-semibold hover:underline flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Invoice
                    </a>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                
                <div className="bg-gray-50 px-6 py-5 border-b border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <span className="text-xs text-gray-500 block mb-1">Order ID</span>
                        <span className="font-bold text-brand-dark">#ORD-2023-001</span>
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 block mb-1">Date Placed</span>
                        <span className="font-bold text-brand-dark">Oct 24, 2023</span>
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 block mb-1">Total Amount</span>
                        <span className="font-bold text-brand-dark">$36.00</span>
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 block mb-1">Payment Method</span>
                        <span className="font-bold text-brand-dark">Visa ****4242</span>
                    </div>
                </div>

                <div className="p-6 md:p-8 border-b border-gray-100">
                    <h3 className="font-bold text-brand-dark mb-6">Order Status</h3>
                    <div className="flex items-center justify-between relative">
                        
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-brand-teal -z-10"></div>
                        
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs font-bold mb-2">✓</div>
                            <span className="text-xs font-semibold text-brand-teal">Pending</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs font-bold mb-2">✓</div>
                            <span className="text-xs font-semibold text-brand-teal">Confirmed</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs font-bold mb-2">✓</div>
                            <span className="text-xs font-semibold text-brand-teal">Processing</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs font-bold mb-2">✓</div>
                            <span className="text-xs font-semibold text-brand-teal">Shipped</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs font-bold mb-2">✓</div>
                            <span className="text-xs font-semibold text-brand-teal">Delivered</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-100">
                    
                    <div>
                        <h3 className="font-bold text-brand-dark mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Shipping Address
                        </h3>
                        <div className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
                            <p className="font-semibold text-brand-dark mb-1">John Doe</p>
                            <p>123 Rainbow Lane</p>
                            <p>Springfield, IL 62704</p>
                            <p>United States</p>
                            <p className="mt-2">Phone: (555) 123-4567</p>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-brand-dark mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            Payment Method
                        </h3>
                        <div className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
                            <p className="font-semibold text-brand-dark mb-1">Credit Card (Visa)</p>
                            <p>**** **** **** 4242</p>
                            <p>Expires: 12/25</p>
                            <p className="mt-2 text-green-600 font-semibold flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Payment Successful
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <h3 className="font-bold text-brand-dark mb-6">Items in this Order</h3>
                    <div className="space-y-6">
                      
                        <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                            <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                <img src="https://placehold.co/150x150/CCCCCC/666666?text=Item+1" alt="Product" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-brand-dark">Colorful Pencil Set</h4>
                                <p className="text-sm text-gray-500">Color: Multicolor</p>
                                <p className="text-sm text-gray-500 mt-1">Qty: 1</p>
                            </div>
                            <div className="font-bold text-brand-dark text-right">
                                <p>$12.00</p>
                                <p className="text-xs text-gray-400 font-normal">$12.00 each</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                            <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                <img src="https://placehold.co/150x150/CCCCCC/666666?text=Item+2" alt="Product" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-brand-dark">Dinosaur Notebook</h4>
                                <p className="text-sm text-gray-500">Size: A5</p>
                                <p className="text-sm text-gray-500 mt-1">Qty: 2</p>
                            </div>
                            <div className="font-bold text-brand-dark text-right">
                                <p>$16.00</p>
                                <p className="text-xs text-gray-400 font-normal">$8.00 each</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                <img src="https://placehold.co/150x150/CCCCCC/666666?text=Item+3" alt="Product" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-brand-dark">Kids Backpack</h4>
                                <p className="text-sm text-gray-500">Color: Blue</p>
                                <p className="text-sm text-gray-500 mt-1">Qty: 1</p>
                            </div>
                            <div className="font-bold text-brand-dark text-right">
                                <p>$25.00</p>
                                <p className="text-xs text-gray-400 font-normal">$25.00 each</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-6 space-y-3 text-sm max-w-xs ml-auto">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>$53.00</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span>Free</span>
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
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <a href="my-orders.html" className="text-gray-500 hover:text-brand-teal font-semibold text-sm flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to My Orders
                </a>
                <div className="flex gap-3">
                    <a href="#" className="bg-white border-2 border-gray-200 text-brand-dark font-bold py-2.5 px-6 rounded-full hover:border-brand-teal hover:text-brand-teal transition flex items-center justify-center gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Need Help?
                    </a>
                    <a href="#" className="bg-brand-teal text-white font-bold py-2.5 px-6 rounded-full hover:bg-teal-600 transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-teal-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Track Order
                    </a>
                </div>
            </div>

        </div>
    </main>
    </>
  )
}   

export default Order_Details;