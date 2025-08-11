'use client';
import { useState } from 'react';
import { Check, Truck } from 'lucide-react';
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
        <p className="text-sm text-gray-500">{item.description || 'Khmer dish'}</p>
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

export default function ChefPage() {
  const { orders, setOrders } = useCart();
  const [deliveryInProgress, setDeliveryInProgress] = useState(false);

  const markAsReady = (id) => {
    setOrders(prevOrders =>
      prevOrders.map(item =>
        item.id === id ? { ...item, status: "ready-for-delivery" } : item
      )
    );
  };

  const startDelivery = () => {
    const itemsToDeliver = orders.filter(item => item.status === "ready-for-delivery");
    if (itemsToDeliver.length === 0) return;
    
    setDeliveryInProgress(true);
    
    setTimeout(() => {
      setOrders(prevOrders =>
        prevOrders.map(item =>
          item.status === "ready-for-delivery" 
            ? { ...item, status: "delivered" } 
            : item
        )
      );
      setDeliveryInProgress(false);
    }, 3000);
  };

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
          {deliveryInProgress && (
            <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center gap-2">
              <Truck className="animate-pulse" />
              <span>Robot is delivering food to customer...</span>
            </div>
          )}
        </div>

        <div className="rounded-xl shadow-sm px-6 py-4 mb-8 bg-black/10 backdrop-blur-xl hover:bg-black/15">
          {activeItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No active orders</p>
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
                onClick={startDelivery}
                disabled={readyItemsCount === 0 || deliveryInProgress}
                className={`flex-1 flex items-center justify-center gap-2 ${
                  readyItemsCount === 0 || deliveryInProgress
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-800 hover:bg-green-700"
                } text-white font-semibold py-3 px-6 rounded-lg transition-colors`}
              >
                <Truck size={18} />
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
                        <p className="text-sm text-gray-500">{item.description || 'Khmer dish'}</p>
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
    </div>
  );
}