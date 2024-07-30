import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css';

function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, item) => sum + item.totalAmount, 0);

  return (
    <div className='cart'>
    <div className="cart-page">
      <p>YOUR CART</p>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h2>BOOKING FOR: {new Date(item.date).toDateString()}</h2>
          <div className="tickets">
            {item.tickets.map((ticket, i) => (
              <div key={i} className="ticket-detail">
                <span>{ticket.name}: {ticket.quantity} x ₹{ticket.price}</span>
              </div>
            ))}
          </div>
          <br></br>
            <h2>ADD-ONs:</h2>
          <div className="add-ons">
            {item.addOns.map((addOn, i) => (
              <div key={i} className="add-on-detail">
                <span>{addOn.name}: ₹{addOn.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Grand Total: ₹{totalAmount}</h2>
      </div>
      <div>
        <button onClick={clearCart} className="clear-cart">Clear Cart</button>
      </div>
      <br></br>
      <div>
        <button onClick={() => navigate('/payment')} className="pay-button">Proceed to Payment</button>
      </div>
    </div>
    </div>
  );
}

export default Cart;
