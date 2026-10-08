import { Link } from "react-router-dom";
import { useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  qty: number;
  price: number;
}

interface NavProps {
  carts: CartItem[];
}

function Nav({ carts}: NavProps) {
  // const carts = useOutletContext<OutletContextType>();
  let cartItems = carts;

  useEffect(() => {
    console.log('__myCartBeforeClick:', cartItems );    
  }, []);

  function addToCart(product: CartItem) {    
    cartItems = [...cartItems, product];
    console.log('__myCart:', cartItems);
  }


  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="./icon.ico"
              alt="picopeeps"
              width="50"
              height="50"
              className="rounded-full"
            />
            <span className="text-2xl font-bold logo-font text-brand-dark">
              picopeeps
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-semibold text-brand-dark">
            <Link to="/" className="hover:text-brand-teal transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-brand-teal transition">
              Products
            </Link>
            <Link to="/contact-us" className="hover:text-brand-teal transition">
              Contact Us
            </Link>
            <Link to="/about-us" className="hover:text-brand-teal transition">
              About Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="hover:text-brand-teal transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </Link>
<Link to="/cart" className="relative inline-flex items-center hover:text-brand-teal transition group">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transition-transform group-hover:scale-110"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
  
    <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-bold text-white bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-md ring-2 ring-white group-hover:scale-110 transition-transform">
       {cartItems.length}
    </span>

</Link>            
            <Link to="/my-account" className="hover:text-brand-teal transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
            {/* <button onClick={() => addToCart()}>+cart 1</button> */}
            <button onClick={() => addToCart({ id: 2, name: 'Bra', qty: 2, price: 1500 })}>+cart 2</button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;