// CartPage.js
import React from 'react';

function Cart({ cart = [], clearCart }) {
  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.date.toDateString()}</h3>
              <ul>
                {item.tickets.map(ticket => (
                  <li key={ticket.name}>
                    {ticket.name}: {ticket.quantity} x ₹{ticket.price} = ₹{ticket.quantity * ticket.price}
                  </li>
                ))}
              </ul>
              {item.addOns.length > 0 && (
                <ul>
                  <h4>Add Ons:</h4>
                  {item.addOns.map(addOn => (
                    <li key={addOn.name}>
                      {addOn.name}: ₹{addOn.price}
                    </li>
                  ))}
                </ul>
              )}
              <p>Total: ₹{item.totalAmount}</p>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
