import {Outlet, Link} from 'react-router-dom';

function App() {
let name = 'PicoPeeps';

  return (
    <>
    <center>
    <img src="./logo.png" alt="picopeeps" width="15%" />
    </center>
    {/* <h2>{name}</h2> */}
    {/* <h1>PicoPeeps</h1> */}
    <nav style={{margin:"20px"}}>
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
    </nav>
    <main>
      <Outlet context={name}/>
    </main>
    </>
  )
}

export default App
