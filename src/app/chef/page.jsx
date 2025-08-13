'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Check, X } from 'lucide-react';
import { useCart } from '@/context/cartContext';

const ChefOrderItem = ({ item, onMarkReady }) => {
  const getStatusColor = () => {
    switch(item.status) {
      case "ready-for-delivery":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-medium">Qty: {item.quantity}</span>
          <span className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor()}`}>
          {item.status.replace(/-/g, ' ')}
        </span>
        
        {item.status === "preparing" && (
          <button
            onClick={() => onMarkReady(item.id)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Mark Ready
          </button>
        )}
      </div>
    </div>
  );
};

const DeliveryConfirmationModal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-96 p-6 shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-800">Delivery Confirmation</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close and confirm delivery"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-4">
          <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100 mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{item.description || 'Delicious dish'}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Price</span>
              <span className="font-medium">${item.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quantity</span>
              <span className="font-medium">{item.quantity}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ChefPage() {
  const { orders, setOrders } = useCart();
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();

  const markAsReady = (id) => {
    setOrders(prevOrders =>
      prevOrders.map(item =>
        item.id === id ? { ...item, status: "ready-for-delivery" } : item
      )
    );
  };

  const handleStartDelivery = () => {
    const readyItems = orders.filter(item => item.status === "ready-for-delivery");
    if (readyItems.length === 0) return;
    
    setSelectedItem(readyItems[0]);
    setShowDeliveryModal(true);
  };

  const handleCloseModal = () => {
    // Mark as delivered when closing the modal
    setOrders(prevOrders =>
      prevOrders.map(item =>
        item.status === "ready-for-delivery" 
          ? { ...item, status: "delivered" } 
          : item
      )
    );
    setShowDeliveryModal(false);
  };

  // Check if all items are delivered and redirect
  useEffect(() => {
    const allDelivered = orders.length > 0 && orders.every(item => item.status === "delivered");
    if (allDelivered) {
      const timer = setTimeout(() => {
        router.push('/'); // Redirect to home page
      }, 1500); // Redirect after 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [orders, router]);

  const activeItems = orders.filter(item => item.status !== "delivered");
  const readyItemsCount = orders.filter(item => item.status === "ready-for-delivery").length;
  const totalAmount = orders.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="mt-[48px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl text-center mt-3 font-bold text-gray-800">
            Order <span className="text-green-800">Details</span>
          </h1>
        </div>

        <div className="rounded-xl shadow-sm px-6 py-4 mb-8 bg-black/10 backdrop-blur-xl hover:bg-black/15">
          {activeItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">
                {orders.length === 0 ? "No active orders" : "All orders completed! Redirecting..."}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {activeItems.map((item) => (
                <ChefOrderItem
                  key={item.id}
                  item={item}
                  onMarkReady={markAsReady}
                />
              ))}
            </div>
          )}
        </div>

        {orders.length > 0 && (
          <div className="mt-8 rounded-xl shadow-sm mb-8 p-6 space-y-4 bg-black/10 backdrop-blur-xl hover:bg-black/15">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">
                {readyItemsCount} items ready for delivery
              </span>
              <span className="text-2xl font-bold text-gray-800">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={handleStartDelivery}
                disabled={readyItemsCount === 0}
                className={`flex-1 flex items-center justify-center ${
                  readyItemsCount === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-800 hover:bg-green-700"
                } text-white font-semibold py-3 px-6 rounded-lg transition-colors`}
              >
                Send via Robot
              </button>
            </div>
          </div>
        )}

        {orders.some(item => item.status === "delivered") && (
          <div className="mt-6 rounded-xl shadow-sm mb-8 p-6 bg-black/10 backdrop-blur-xl hover:bg-black/15">
            <details>
              <summary className="font-semibold text-gray-800 cursor-pointer">
                Delivered Items ({orders.filter(item => item.status === "delivered").length})
              </summary>
              <div className="mt-4 space-y-4">
                {orders
                  .filter(item => item.status === "delivered")
                  .map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0 opacity-70">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.description || 'Delicious dish'}</p>
                      </div>
                      <div className="text-green-800 flex items-center gap-1">
                        <Check size={18} />
                        <span>Delivered</span>
                      </div>
                    </div>
                  ))}
              </div>
            </details>
          </div>
        )}
      </div>

      {showDeliveryModal && selectedItem && (
        <DeliveryConfirmationModal
          item={selectedItem}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}