import React from 'react';
import './Cart.css';

function Cart({ cart, clearCart }) {
  const getTotalTickets = () => {
    return cart.reduce((total, item) => {
      return (
        total +
        item.tickets.adult +
        item.tickets.child +
        item.tickets.senior +
        item.tickets.infant +
        item.tickets.disabled
      );
    }, 0);
  };

  const getTotalAmount = () => {
    const prices = {
      adult: 20,
      child: 10,
      senior: 15,
      infant: 0,
      disabled: 10,
    };

    return cart.reduce((total, item) => {
      return (
        total +
        item.tickets.adult * prices.adult +
        item.tickets.child * prices.child +
        item.tickets.senior * prices.senior +
        item.tickets.infant * prices.infant +
        item.tickets.disabled * prices.disabled
      );
    }, 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div>Date: {item.date}</div>
            <div>Adult: {item.tickets.adult}</div>
            <div>Child: {item.tickets.child}</div>
            <div>Senior Citizen: {item.tickets.senior}</div>
            <div>Infant: {item.tickets.infant}</div>
            <div>Disabled: {item.tickets.disabled}</div>
          </li>
        ))}
      </ul>
      <div>Total Tickets: {getTotalTickets()}</div>
      <div>Total Amount: ${getTotalAmount()}</div>
      <button onClick={clearCart}>Clear Cart</button>
      <button>Proceed to Payment</button>
    </div>
  );
}

export default Cart;
