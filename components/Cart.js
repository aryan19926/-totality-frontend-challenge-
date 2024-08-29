import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Cart({ cart, removeFromCart, updateQuantity }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="mb-4 p-2 bg-green-700 rounded shadow">
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price} / night</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="bg-blue-500 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-blue-500 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout" legacyBehavior>
              <a className="block mt-4 bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Proceed to Checkout
              </a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
