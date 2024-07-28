// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

function CartPage() {
  const { cart, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const ticketsTotal = item.tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0);
      const addOnsTotal = item.addOns.reduce((sum, addOn) => sum + addOn.price, 0);
      return total + ticketsTotal + addOnsTotal;
    }, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
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
          <div className="cart-summary">
            <p>Total Sum: ₹{calculateTotal()}</p>
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
