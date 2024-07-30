import React, { useState, useContext } from 'react';
import './BookingForm.css';
import { useNavigate } from 'react-router-dom';
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
  { name: 'Bus Safari', price: 50 },
  { name: 'Jeep Safari', price: 100 },
];

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState('');
  const [tickets, setTickets] = useState(categories.map(category => ({ ...category, quantity: 0 })));
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const { addTicketToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0]; // Today's date in 'YYYY-MM-DD' format

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
    const selectedDateObj = new Date(selectedDate);
    const todayDateObj = new Date(today);
    if (selectedDateObj < todayDateObj) {
      alert("Please select a date that is today or in the future.");
      return;
    }
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
    setSelectedDate('');
    navigate('/cart');
  };

  return (
    <div className="booking-page">
      <p>BOOK YOUR TICKETS</p>
      <div className="date-selector">
        <input
          type="date"
          value={selectedDate}
          min={today} // Ensures that past dates are not selectable
          onChange={(e) => setSelectedDate(e.target.value)}
        />
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
          <b><h6>ADD ONS</h6></b>
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
        <button type="submit" className='add'>Next</button>
      </form>
    </div>
  );
}

export default BookingForm;
