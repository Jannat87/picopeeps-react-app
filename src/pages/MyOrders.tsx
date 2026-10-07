function My_Orders(){
    return(
        <>
    <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
            
            <aside className="lg:w-1/4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-brand-teal font-bold text-xl">
                            JD
                        </div>
                        <div>
                            <h3 className="font-bold text-brand-dark">John Doe</h3>
                            <p className="text-xs text-gray-500">john.doe@example.com</p>
                        </div>
                    </div>
                    <nav className="space-y-2">
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-brand-teal transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Profile
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-50 text-brand-teal font-semibold transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            My Orders
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-brand-teal transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Wishlist
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-brand-teal transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Addresses
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-brand-teal transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Logout
                        </a>
                    </nav>
                </div>
            </aside>

            <div className="lg:w-3/4">
                
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
                    
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-6 text-sm">
                            <div>
                                <span className="text-gray-500 block">Order ID</span>
                                <span className="font-bold text-brand-dark">#ORD-2023-001</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">Date Placed</span>
                                <span className="font-bold text-brand-dark">Oct 24, 2023</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">Total Amount</span>
                                <span className="font-bold text-brand-dark">$36.00</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Delivered</span>
                            <button className="text-brand-teal text-sm font-semibold hover:underline">View Details</button>
                        </div>
                    </div>

                    <div className="p-6">
                        
                        <div className="mb-8">
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

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src="https://placehold.co/100x100/CCCCCC/666666?text=Item+1" alt="Product" className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-brand-dark">Colorful Pencil Set</h4>
                                    <p className="text-sm text-gray-500">Qty: 1</p>
                                </div>
                                <div className="font-bold text-brand-dark">$12.00</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src="https://placehold.co/100x100/CCCCCC/666666?text=Item+2" alt="Product" className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-brand-dark">Dinosaur Notebook</h4>
                                    <p className="text-sm text-gray-500">Qty: 2</p>
                                </div>
                                <div className="font-bold text-brand-dark">$16.00</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
                    
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-6 text-sm">
                            <div>
                                <span className="text-gray-500 block">Order ID</span>
                                <span className="font-bold text-brand-dark">#ORD-2023-002</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">Date Placed</span>
                                <span className="font-bold text-brand-dark">Oct 28, 2023</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">Total Amount</span>
                                <span className="font-bold text-brand-dark">$25.00</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Shipped</span>
                            <button className="text-brand-teal text-sm font-semibold hover:underline">View Details</button>
                        </div>
                    </div>

                    <div className="p-6">
                      
                        <div className="mb-8">
                            <div className="flex items-center justify-between relative">
                                
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3/4 h-1 bg-brand-teal -z-10"></div>
                                
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
                                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold mb-2">5</div>
                                    <span className="text-xs font-semibold text-gray-400">Delivered</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src="https://placehold.co/100x100/CCCCCC/666666?text=Item+3" alt="Product" className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-brand-dark">Kids Backpack</h4>
                                    <p className="text-sm text-gray-500">Qty: 1</p>
                                </div>
                                <div className="font-bold text-brand-dark">$25.00</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden opacity-75">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-6 text-sm">
                            <div>
                                <span className="text-gray-500 block">Order ID</span>
                                <span className="font-bold text-brand-dark">#ORD-2023-003</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">Date Placed</span>
                                <span className="font-bold text-brand-dark">Nov 02, 2023</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">Total Amount</span>
                                <span className="font-bold text-brand-dark">$15.00</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Cancelled</span>
                            <button className="text-brand-teal text-sm font-semibold hover:underline">View Details</button>
                        </div>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-500 text-sm">This order was cancelled on Nov 03, 2023. Refund has been processed.</p>
                    </div>
                </div>

            </div>
        </div>
    </main> 
        </>
    )
}

export default My_Orders;