// src/components/CartDrawer.tsx
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  // drawer বন্ধ করার helper
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* ১. Overlay — drawer এর পিছনে কালো layer, click করলে বন্ধ হবে */}
      {isDrawerOpen && (
        <div className="overlay" onClick={closeDrawer} />
      )}

      {/* ২. Drawer Panel — ডানপাশ থেকে slide করে আসবে */}
      <aside className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        {/* ---------- Header ---------- */}
        <div className="drawer-header">
          <h3>Your Cart</h3>
          <button onClick={closeDrawer}>✖</button>
        </div>

        {/* ---------- Body ---------- */}
        {cartItems.length === 0 ? (
          <p className="empty">Cart is empty 🛒</p>
        ) : (
          <div className="drawer-body">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} width={50} />

                <div className="info">
                  <h4>{item.name}</h4>
                  <p>৳ {item.price}</p>

                  {/* Quantity +/- */}
                  <div className="qty">
                    <button onClick={() => decreaseQuantity(item.id)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))}

            {/* ---------- Footer (Total + Checkout) ---------- */}
            <div className="drawer-footer">
              <h4>Total: ৳ {totalPrice}</h4>
              <button className="checkout">Checkout</button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}