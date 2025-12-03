'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddToCartButton() {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success(`${quantity} item(s) added to cart!`, {
      icon: '🛒',
      duration: 3000,
    });
  };

  const handleDecreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDecreaseQuantity}
            className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-blue-600 transition"
          >
            -
          </button>
          <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-blue-600 transition"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
      >
        Add to Cart
      </button>
    </>
  );
}