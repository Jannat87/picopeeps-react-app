function Footer() {
  return (
    <>
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <img src="./logo.png" alt="PicoPeeps Logo" className="w-40" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-brand-dark mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    Discounts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-dark mb-4">Support</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-dark mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal">
                    Return & Refund
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2023 PicoPeeps. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-teal">
                Facebook
              </a>
              <a href="#" className="hover:text-brand-teal">
                Instagram
              </a>
              <a href="#" className="hover:text-brand-teal">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;