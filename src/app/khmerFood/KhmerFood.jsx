'use client';
import React, { useState } from 'react';
import { Plus, Star, Clock, Check, X } from 'lucide-react';
import { useCart } from '@/context/cartContext';

const KhmerFood = ({ dishes }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const [cartAdded, setCartAdded] = useState(false);

  const handleAddToCart = (dish) => {
    setLoadingId(dish.id);
    setSelectedDish(dish);
    setCartAdded(false);
    
    setTimeout(() => {
      addToCart(dish);
      setCartAdded(true);
      setShowPopup(true);
      setLoadingId(null);
    }, 500);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 py-12 relative">
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full animate-popIn">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-green-600 flex items-center">
                <Check className="w-5 h-5 mr-2" />
                Added to Cart!
              </h3>
              <button 
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={selectedDish?.image} 
                alt={selectedDish?.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <p className="font-medium">{selectedDish?.name}</p>
                <p className="text-green-800 font-bold">${selectedDish?.price}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={closePopup}
                className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Continue Shopping
              </button>
              <a
                href="/cart"
                className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                View Cart
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="">
        <h1 className="text-3xl text-center mb-8 font-bold text-gray-800">
            Choose Your <span className="text-green-800">Food</span>
          </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => {
            const isAdding = loadingId === dish.id;
            
            return (
              <div
                key={dish.id}
                className="bg-black/10 backdrop-blur-xl rounded-2xl p-4 hover:bg-black/15 transition-colors group"
              >
                <div className="relative">
                  <div className="w-[257px] h-[200px] flex items-center justify-center text-4xl mb-4 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-black font-semibold">{dish.name}</h3>
                    <div className="flex items-center justify-center space-x-2 text-sm text-black/80">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{dish.rating}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{dish.time}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-black font-bold">${dish.price}</span>
                      <span className="text-black/60 line-through text-sm">
                        ${dish.originalPrice}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(dish)}
                      disabled={isAdding}
                      className={`w-full py-2 rounded-full text-sm font-semibold transition-all flex items-center justify-center space-x-1
                        ${isAdding ? 'bg-green-100 text-green-800 cursor-not-allowed' : 
                          'bg-gray-200 hover:bg-black/20 text-black hover:shadow-md'}
                      `}
                    >
                      {isAdding ? (
                        <>
                          <span className="animate-spin mr-1">↻</span>
                          Adding...
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-popIn {
          animation: popIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default KhmerFood;