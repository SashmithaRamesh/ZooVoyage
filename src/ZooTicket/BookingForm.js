import React, { useState, useContext } from 'react';
import './BookingForm.css';
import {  useNavigate } from 'react-router-dom'; // Changed useHistory to useNavigate
import { CartContext } from './CartContext';

const categories = [
  { name: 'Adult', price: 100 },
  { name: 'Child', price: 50 },
  { name: 'Senior Citizen', price: 60 },
  { name: 'Infant', price: 0 },
  { name: 'Specially Abled', price: 0 },
];

const addOns = [
  { name: 'Butterfly Park', price: 30 },
  { name: 'Still Camera', price: 50 },
  { name: 'Video Camera', price: 100 },
];

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tickets, setTickets] = useState(categories.map(category => ({ ...category, quantity: 0 })));
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const { addTicketToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Changed from useHistory to useNavigate

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  const formatDate = (date) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString(undefined, options);
  };

  const handleTicketChange = (index, delta) => {
    const newTickets = [...tickets];
    newTickets[index].quantity = Math.max(0, newTickets[index].quantity + delta);
    setTickets(newTickets);
  };

  const handleAddOnChange = (addOn) => {
    const newSelectedAddOns = selectedAddOns.includes(addOn)
      ? selectedAddOns.filter(a => a !== addOn)
      : [...selectedAddOns, addOn];
    setSelectedAddOns(newSelectedAddOns);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }
    const ticket = {
      date: selectedDate,
      tickets,
      addOns: selectedAddOns,
      totalAmount: tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0) +
                   selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0),
    };
    addTicketToCart(ticket);
    setTickets(categories.map(category => ({ ...category, quantity: 0 })));
    setSelectedAddOns([]);
    setSelectedDate(null);
    navigate('/cart'); // Changed from history.push to navigate
  };

  return (
    <div className="booking-page">
      <p>Book Your Tickets</p>
      <div className="date-selector">
        {dates.map((date, index) => (
          <button
            key={index}
            className={selectedDate && date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}
            onClick={() => setSelectedDate(date)}
          >
            {formatDate(date)}
          </button>
        ))}
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        {tickets.map((ticket, index) => (
          <div key={ticket.name} className="ticket-category">
            <span>{ticket.name}</span>
            <span>{`₹${ticket.price}/ Person`}</span>
            <div className="quantity-control">
              <button type="button" onClick={() => handleTicketChange(index, -1)}>-</button>
              <span>{ticket.quantity}</span>
              <button type="button" onClick={() => handleTicketChange(index, 1)}>+</button>
            </div>
          </div>
        ))}
        <div className="add-ons">
          <h3>Add Ons</h3>
          {addOns.map(addOn => (
            <div key={addOn.name} className="add-on">
              <input
                type="checkbox"
                id={addOn.name}
                checked={selectedAddOns.includes(addOn)}
                onChange={() => handleAddOnChange(addOn)}
              />
              <label htmlFor={addOn.name}>{addOn.name}</label>
            </div>
          ))}
        </div>
        <button type="submit" className='add'>Add to Cart</button>
      </form>
    </div>
  );
}

export default BookingForm;
