//cart untuk keranjang yg disamping kanan itu, tapi manggilnya lewat komponen cart item untuk pengisiannya

import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Card } from 'flowbite-react';
import moment from "moment";
import { Button, Modal } from "flowbite-react";

const pizzas = [
  {
    id: 0,
    image: "",
    name: "Pizza 1",
    price: 0,
  },
  {
    id: 1,
    image: "",
    name: "Pizza 2",
    price: 0,
  },
];

function Cart({ carts, dispatch }) {
  const initialOrderHistory = JSON.parse(localStorage.getItem("orderHistory"));
  const [orderHistory, setOrderHistory] = useState(initialOrderHistory || []);
  const totalPrice = carts.reduce((total, cart) => total + cart.totalPrice, 0)
  const tax = totalPrice * 0.1;
  const serviceCharge = totalPrice * 0.05;
  const grandTotal = totalPrice + tax + serviceCharge;
  const [showOrderSuccessModal, setShowOrderSuccessModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  function handleDeleteItem(id) {
    dispatch({
      type: 'delete_cart_item',
      itemId: id,
    });
  }

  function handleIncreaseQuantity(cart) {
    dispatch({
      type: 'increase_quantity',
      payload: cart,
    });
  }

  function handleDecreaseQuantity(cart) {
    dispatch({
      type: 'decrease_quantity',
      payload: cart,
    });
  }

  function placeOrder() {
    // Buat format tanggal dan waktu saat ini
    const now = moment().format("YYYYMMDD");
    // Tambahkan tiga digit angka random
    const randomNumbers = Math.floor(Math.random() * 1000) + 1;
    // Gabungkan tanggal, waktu, dan angka random
    const orderNumber = `${now}-${randomNumbers}`;
    // const [orderHistory, setOrderHistory] = useState([]);
    const orderItems = carts.filter((cart) => cart.quantity > 0);
    // alert("Pesanan Berhasil Disimpan - Order Number : " + orderNumber);

    const order = {
      orderNumber,
      totalPrice,
      serviceCharge,
      tax,
      grandTotal: totalPrice + tax + serviceCharge,
      items: orderItems.map((cart) => {

        return {
          name: cart.name,
          quantity: cart.quantity,
          price: cart.totalPrice,
          serviceCharge: cart.serviceCharge,
          grandTotal: cart.grandTotal,
        };
      }),
    };

    setOrderNumber(orderNumber);

    setOrderHistory((prevOrderHistory) => [...prevOrderHistory, order]);
    setShowOrderSuccessModal(true);
    return dispatch({
      type: "checkout_item",
    });
  }

  useEffect(() => {
    if (orderHistory.length > 0) {
      console.log(orderHistory);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));


    }
  }, [orderHistory]); // Jalankan efek hanya ketika orderHistory berubah

  // useEffect(() => {
  //   // Ambil order history dari local storage
  //   const orderHistoryFromLocalStorage = localStorage.getItem("orderHistory");
  //   if (orderHistoryFromLocalStorage) {
  //     const parsedOrderHistory = JSON.parse(orderHistoryFromLocalStorage);
  //     setOrderHistory(parsedOrderHistory);
  //     console.log(orderHistory);
  //   }
  // }, []); // Jalankan efek hanya sekali setelah komponen dirender


  return (
    <div style={{ width: "30%" }}>
      <ul>
        {carts.map((cart) => (
          
          <Card className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative" key={cart.id}>

            <CartItem

              name={cart.name}
              image={cart.image}
              price={cart.totalPrice}
              notes={cart.notes}

            />

            <button disabled={cart.quantity <= 1} onClick={() => handleDecreaseQuantity(cart)}>-</button>
            <span>{cart.quantity}</span>
            <button onClick={() => handleIncreaseQuantity(cart)}>+</button>
            <button onClick={() => handleDeleteItem(cart.id)}>Delete</button>
          </Card>
        ))}
      </ul>

      <div className="space-y-5 px-5">
        <div className="divide-y">
          <div className="py-3">
            <div className="flex justify-between">
              <p>Total Price</p>
              <p>{totalPrice.toLocaleString("id")}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>{tax.toLocaleString("id")}</p>
            </div>
            <div className="flex justify-between">
              <p>Service Charge</p>
              <p>{serviceCharge.toLocaleString("id")}</p>
            </div>
          </div>

          <div className="flex justify-between py-3 font-semibold">
            <p>Grand Total</p>
            <p>{grandTotal.toLocaleString("id")}</p>
          </div>
        </div>

        <Button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
  className="w-full"
  color="warning"
  onClick={() => placeOrder()}
>
  Place Order
</Button>

<Modal show={showOrderSuccessModal} onClose={() => setShowOrderSuccessModal(false)}>
    <Modal.Header>Order Success</Modal.Header>
    <Modal.Body>
      <p>Pesanan Berhasil Disimpan - Order Number: {orderNumber}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button color="success" onClick={() => {
        setShowOrderSuccessModal(false);
        setOrderNumber(''); // Reset orderNumber to empty string when closing the modal
      }}>Close</Button>
    </Modal.Footer>
  </Modal>


      </div>

    </div>
  );
}

export default Cart;