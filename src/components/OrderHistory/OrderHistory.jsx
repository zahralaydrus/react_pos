import React, { useState } from 'react';
import OrderItem from './OrderItem';

function OrderHistory() {
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orderHistory')) || []);

  const handleDeleteOrder = (orderNumber) => {
    const updatedOrders = orders.filter((order) => order.orderNumber !== orderNumber);
    setOrders(updatedOrders);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));
  };

  return (
    <>
      {orders.length > 0 ? (
        <div className="grid grid-cols-2 gap-5 p-5">
          {orders.map((order) => (
            <div key={order.orderNumber} className="border rounded-lg shadow-md p-4">
              <OrderItem order={order} />
              <button
                onClick={() => handleDeleteOrder(order.orderNumber)}
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg focus:outline-none"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-3xl text-gray-400">No order has been made</h1>
        </div>
      )}
    </>
  );
}

export default OrderHistory;
