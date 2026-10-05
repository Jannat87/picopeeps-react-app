import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Products from './pages/Products'
import Product_Details from './pages/Product_Details'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Category from './component-page/Category'
import Category_Products from './pages/Category_Products'
import About_Us from './pages/About_Us'
import Contact_Us from './pages/Contact_Us'
import Login from './pages/Login'
import My_Account from './pages/My_Account'
import My_Orders from './pages/My_Orders'
import Wishlist from './pages/Wishlist'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"/products",
        element: <Products/>
      },
      {
        path:"/product-details",
        element: <Product_Details/>
      },
      {
        path:"/checkout",
        element: <Checkout/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path: "wishlist",
        element: <Wishlist/>
      },
      {
        path:"/category",
        element: <Category/>
      },
      {
        path:"/category-products",
        element: <Category_Products/>
      },
      {
        path:"/about-us",
        element: <About_Us/>
      },
      {
        path:"/contact-us",
        element: <Contact_Us/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/my-account",
        element: <My_Account/>
      },
      {
        path:"/my-orders",
        element: <My_Orders/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </StrictMode>
)
