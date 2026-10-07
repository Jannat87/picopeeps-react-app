function Order_Tracking() {
  return (
    <>
        <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
            
            <div className="g-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 mb-10">
                <h2 className="ext-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Find Your Order
                </h2>
                <form action="#" method="POST" className="rid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div>
                        <label for="order-id" className="lock text-sm font-semibold text-brand-dark mb-2">Order ID</label>
                        <div className="elative">
                            <div className="bsolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <input type="text" id="order-id" name="order-id" placeholder="e.g., #ORD-2023-001" required
                                className="-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"/>
                        </div>
                    </div>
                   
                    <div>
                        <label for="email" className="lock text-sm font-semibold text-brand-dark mb-2">Email or Phone</label>
                        <div className="elative">
                            <div className="bsolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input type="text" id="email" name="email" placeholder="you@example.com" required
                                className="-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"/>
                        </div>
                    </div>
                   
                    <div className="d:col-span-2">
                        <button type="submit" 
                            className="-full bg-brand-teal text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition shadow-lg shadow-teal-200 flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Track Order
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="g-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                
                <div className="g-gray-50 px-6 py-5 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                    <div>
                        <span className="ext-xs text-gray-500 block mb-1">Order ID</span>
                        <span className="ont-bold text-brand-dark">#ORD-2023-002</span>
                    </div>
                    <div>
                        <span className="ext-xs text-gray-500 block mb-1">Estimated Delivery</span>
                        <span className="ont-bold text-brand-dark">Nov 05, 2023</span>
                    </div>
                    <div>
                        <span className="g-blue-100 text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full">Shipped</span>
                    </div>
                </div>

                <div className="-6 md:p-10">
                    <h3 className="ont-bold text-brand-dark mb-8 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Tracking History
                    </h3>
                    
                    <div className="elative border-l-2 border-brand-teal ml-4 space-y-10">
                        
                        <div className="elative pl-8">
                            <div className="bsolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-teal border-4 border-white shadow"></div>
                            <div>
                                <h4 className="ont-bold text-brand-dark text-sm">Order Placed</h4>
                                <p className="ext-xs text-gray-500 mt-1">Oct 28, 2023 at 10:23 AM</p>
                                <p className="ext-sm text-gray-600 mt-2">Your order has been successfully placed and is awaiting confirmation.</p>
                            </div>
                        </div>

                        <div className="elative pl-8">
                            <div className="bsolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-teal border-4 border-white shadow"></div>
                            <div>
                                <h4 className="ont-bold text-brand-dark text-sm">Order Confirmed</h4>
                                <p className="ext-xs text-gray-500 mt-1">Oct 28, 2023 at 11:45 AM</p>
                                <p className="ext-sm text-gray-600 mt-2">Your order has been confirmed and is being prepared for processing.</p>
                            </div>
                        </div>

                        <div className="elative pl-8">
                            <div className="bsolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-teal border-4 border-white shadow"></div>
                            <div>
                                <h4 className="ont-bold text-brand-dark text-sm">Processing</h4>
                                <p className="ext-xs text-gray-500 mt-1">Oct 29, 2023 at 09:15 AM</p>
                                <p className="ext-sm text-gray-600 mt-2">Your items are being packed at our warehouse.</p>
                            </div>
                        </div>

                        <div className="elative pl-8">
                            <div className="bsolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-teal border-4 border-white shadow ring-2 ring-brand-teal animate-pulse"></div>
                            <div>
                                <h4 className="ont-bold text-brand-teal text-sm">Shipped</h4>
                                <p className="ext-xs text-gray-500 mt-1">Oct 30, 2023 at 02:30 PM</p>
                                <p className="ext-sm text-gray-600 mt-2">Your order has been handed over to the carrier and is on its way.</p>
                                <div className="t-3 bg-teal-50 border border-teal-100 rounded-xl p-3 text-sm text-brand-dark">
                                    <p className="ont-semibold mb-1">Carrier: PicoExpress</p>
                                    <p>Tracking Number: <span className="ont-mono font-bold">PE-9876543210</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="elative pl-8 opacity-50">
                            <div className="bsolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gray-300 border-4 border-white shadow"></div>
                            <div>
                                <h4 className="ont-bold text-gray-500 text-sm">Out for Delivery</h4>
                                <p className="ext-xs text-gray-400 mt-1">Pending</p>
                                <p className="ext-sm text-gray-500 mt-2">Your order will be out for delivery soon.</p>
                            </div>
                        </div>

                        <div className="elative pl-8 opacity-50">
                            <div className="bsolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gray-300 border-4 border-white shadow"></div>
                            <div>
                                <h4 className="ont-bold text-gray-500 text-sm">Delivered</h4>
                                <p className="ext-xs text-gray-400 mt-1">Pending</p>
                                <p className="ext-sm text-gray-500 mt-2">Your order will be delivered to your address.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="g-gray-50 px-6 py-6 border-t border-gray-100">
                    <h3 className="ont-bold text-brand-dark mb-4 text-sm">Shipping To</h3>
                    <div className="ext-sm text-gray-600 leading-relaxed">
                        <p className="ont-semibold text-brand-dark">John Doe</p>
                        <p>123 Rainbow Lane, Springfield, IL 62704, United States</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                </div>

            </div>

            <div className="t-10 text-center">
                <p className="ext-gray-500 text-sm mb-3">Having trouble tracking your order?</p>
                <a href="#" className="ext-brand-teal font-bold hover:underline inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Contact Customer Support
                </a>
            </div>

        </div>
    </main>
    </>
  );
}

export default Order_Tracking;