import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./component-global/Nav";
import Footer from "./component-global/Footer";
import CartDrawer from "./component-global/CartDrawer";

function App() {
  let name = "PicoPeeps";  

  return (
    <>
      <Nav />
      <main>
        <Outlet context={{ name }} />
      </main>
      <Footer />
      <CartDrawer/>
    </>
  );
}

export default App;