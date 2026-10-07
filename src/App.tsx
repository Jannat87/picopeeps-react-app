import { Outlet } from "react-router-dom";
import Nav from "./component-global/Nav";
import Footer from "./component-global/Footer";
import { useState } from "react";

export interface CartItem {
  id: number;
  name: string;
  qty: number;
  price: number;
}

function App() {
  let name = "PicoPeeps";
  const [carts, setCarts] = useState<CartItem[]>([]);

  return (
    <>
      <Nav carts={carts} />
      <main>
        <Outlet context={{ name, carts }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
