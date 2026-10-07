import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetails";
import OrderTracking from "./pages/OrderTracking";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import Category from "./component-page/Category";
import CategoryProducts from "./pages/CategoryProducts";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/order-tracking",
        element: <OrderTracking />,
      },
      {
        path: "/order-details",
        element: <OrderDetails />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category-products",
        element: <CategoryProducts />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/return-refund-policy",
        element: <ReturnRefundPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
