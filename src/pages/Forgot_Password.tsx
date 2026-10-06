function Forgot_Password() {
    return (
        <>
    <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
            
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
                
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-teal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold text-brand-dark text-center logo-font mb-2">Forgot Password?</h1>
                <p className="text-gray-500 text-sm text-center mb-8">No worries! Enter your email address and we'll send you a link to reset your password.</p>

                <form action="#" method="POST" className="space-y-6">
                    
                    <div>
                        <label for="email" className="block text-sm font-semibold text-brand-dark mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input type="email" id="email" name="email" placeholder="you@example.com" required
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition text-sm"/>
                        </div>
                    </div>

                    <button type="submit" 
                        className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition shadow-lg shadow-teal-200 flex items-center justify-center gap-2">
                        Send Reset Link
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-400">Remember your password?</span>
                    </div>
                </div>

                <div className="text-center">
                    <a href="login.html" className="text-brand-teal font-bold hover:underline flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Login
                    </a>
                </div>

            </div>
             
            <div className="mt-6 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl text-sm text-center flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Password reset link sent! Check your inbox.
            </div>
           
        </div>
    </main>
        </>
    );
}

export default Forgot_Password;