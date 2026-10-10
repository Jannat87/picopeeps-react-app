// src/context/CartContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type CartItem = Product & { quantity: number };

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  totalItems: number;
  totalPrice: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        totalItems,
        totalPrice,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}