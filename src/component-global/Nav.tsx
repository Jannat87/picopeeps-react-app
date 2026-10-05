import { Link } from "react-router-dom";

function Nav(){
    return(
        <>    
    <nav className="bg-white shadow-md sticky top-0 z-50">        
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            
            <Link to="/" className="flex items-center gap-2">
                <img src="./icon.ico" alt="picopeeps" width="50" height="50" className="rounded-full"/>
                <span className="text-2xl font-bold logo-font text-brand-dark">picopeeps</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 font-semibold text-brand-dark">
                <Link to="/" className="hover:text-brand-teal transition">Home</Link>
                <Link to="/products" className="hover:text-brand-teal transition">Products</Link>
                <Link to="/contact-us" className="hover:text-brand-teal transition">Contact Us</Link>
                <Link to="/about-us" className="hover:text-brand-teal transition">About Us</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/wishlist" className="hover:text-brand-teal transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </Link>
                <Link to="/cart" className="hover:text-brand-teal transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </Link>
                <Link to="/my-account" className="hover:text-brand-teal transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </Link>
            </div>
        </div>
    </nav>       
    {/* <nav style={{margin:"20px"}}>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/">
          Home
      </Link>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/products">
          Products
      </Link>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/product_details">
          Product Details
      </Link>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/checkout">
          Checkout
      </Link>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/about_us">
          About Us
      </Link>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/contact_us">
          Contact Us
      </Link>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/login">
          Login
      </Link>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/my_account">
          My Account
      </Link>
      <Link
        style={{margin: "3px 10px", textDecoration: "none"}} 
        to="/my_orders">
          My Orders
      </Link>
    </nav> */}
        </>
    );
}
export default Nav;