'use client';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cartContext';
import { useState } from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description || 'Delicious dish'}</p>
      </div>

      <div className="flex-shrink-0">
        <span className="text-lg font-bold text-gray-800">
          ${item.price.toFixed(2)}
        </span>
      </div>

      <div className="flex-shrink-0">
        <div className="flex items-center bg-white rounded-lg overflow-hidden">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-3 cursor-pointer text-gray-900 hover:bg-gray-200 transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-2 text-gray-900 font-semibold min-w-[3rem] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-3 cursor-pointer text-gray-900 hover:bg-gray-200 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="flex-shrink-0">
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-gray-900 hover:text-red-500 cursor-pointer rounded-lg transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default function CartPage() {
  const router = useRouter();
  const { 
    cartItems, 
    updateCartItemQuantity, 
    removeFromCart, 
    submitOrder,
    cartCount
  } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  // Sort items by creation time (oldest first)
  const sortedCartItems = [...cartItems].sort((a, b) => {
    const aTime = a.createdAt || 0;
    const bTime = b.createdAt || 0;
    return aTime - bTime;
  });

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();
    try {
      submitOrder();
      setShowPopup(true);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push('/chef');
  };

  return (
    <div className="mt-[48px] relative">
      {/* Order Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
            {/* <div className="text-center py-6">
              <p className="text-xl text-gray-800">
                Please click the physical button to allow the robot to go to the kitchen
              </p>
            </div> */}
            <div className="text-center py-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Order Submitted!</h2>
              <p className="text-xl text-gray-800">
                Please click the physical button to allow the robot to go to the kitchen
              </p>
              <img className='flex justify-center ps-[90px]' src="./images/logo/button.png" alt="button" />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl text-center mt-3 font-bold text-gray-800">
            Your <span className="text-green-800">Cart</span>
          </h1>
        </div>

        {/* Cart Items List */}
        <div className="rounded-xl shadow-sm px-6 py-4 mb-8 bg-black/10 backdrop-blur-xl hover:bg-black/15">
          {sortedCartItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedCartItems.map((item) => (
                <CartItem
                  key={`${item.id}-${item.createdAt || ''}`}
                  item={item}
                  onUpdateQuantity={updateCartItemQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {sortedCartItems.length > 0 && (
          <div className="rounded-xl shadow-sm mb-8 p-6 bg-black/10 backdrop-blur-xl hover:bg-black/15">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-800">
                Total Items ({cartCount})
              </span>
              <span className="text-2xl font-bold text-gray-800">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Finish Your Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}