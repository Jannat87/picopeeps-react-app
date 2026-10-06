function Order_Confirmation() {
  return (
        <>
    {/* <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
            
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
               
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-teal"></div>

                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark logo-font mb-3">Order Confirmed!</h1>
                <p className="text-gray-500 mb-8 max-w-lg mx-auto">Thank you for your purchase. Your order has been successfully placed and is now being processed. A confirmation email has been sent to your inbox.</p>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8 inline-block text-left w-full max-w-sm mx-auto">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Order ID</span>
                        <span className="font-bold text-brand-dark">#ORD-2023-004</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Date</span>
                        <span className="font-bold text-brand-dark">Oct 30, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Total Amount</span>
                        <span className="font-bold text-brand-teal text-lg">$36.00</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                    <a href="my-orders.html" className="bg-brand-teal text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition shadow-lg shadow-teal-200 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Track Order
                    </a>
                    <a href="products.html" className="bg-white border-2 border-gray-200 text-brand-dark font-bold py-3 px-8 rounded-full hover:border-brand-teal hover:text-brand-teal transition flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Continue Shopping
                    </a>
                </div>

                <div className="border-t border-gray-100 pt-8 text-left">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        
                        <div>
                            <h3 className="font-bold text-brand-dark mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Shipping Address
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                John Doe<br>
                                123 Rainbow Lane<br>
                                Springfield, IL 62704<br>
                                United States<br>
                                (555) 123-4567
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-brand-dark mb-3 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                Payment Method
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Credit Card (Visa)<br>
                                **** **** **** 4242<br>
                                Expires: 12/25
                            </p>
                        </div>
                    </div>

                    <h3 className="font-bold text-brand-dark mb-4">Order Summary</h3>
                    <div className="space-y-4 mb-6">
                        
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img src="https://placehold.co/100x100/CCCCCC/666666?text=Item+1" alt="Product" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-brand-dark text-sm">Colorful Pencil Set</h4>
                                <p className="text-xs text-gray-500">Qty: 1</p>
                            </div>
                            <div className="font-semibold text-brand-dark text-sm">$12.00</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img src="https://placehold.co/100x100/CCCCCC/666666?text=Item+2" alt="Product" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-brand-dark text-sm">Dinosaur Notebook</h4>
                                <p className="text-xs text-gray-500">Qty: 2</p>
                            </div>
                            <div className="font-semibold text-brand-dark text-sm">$16.00</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img src="https://placehold.co/100x100/CCCCCC/666666?text=Item+3" alt="Product" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-brand-dark text-sm">Kids Backpack</h4>
                                <p className="text-xs text-gray-500">Qty: 1</p>
                            </div>
                            <div className="font-semibold text-brand-dark text-sm">$25.00</div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
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
                        <div className="flex justify-between font-bold text-brand-dark text-lg pt-2 border-t border-gray-100">
                            <span>Total</span>
                            <span className="text-brand-teal">$53.00</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main> */}
        </>
  )
}

export default Order_Confirmation;