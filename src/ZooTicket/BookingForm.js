import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ addTicketToCart }) {
  const [date, setDate] = useState('');
  const [tickets, setTickets] = useState({
    adult: 0,
    child: 0,
    senior: 0,
    infant: 0,
    disabled: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTickets({ ...tickets, [name]: Number(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTicketToCart({ date, tickets });
    setDate('');
    setTickets({
      adult: 0,
      child: 0,
      senior: 0,
      infant: 0,
      disabled: 0,
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Adult</label>
        <input
          type="number"
          name="adult"
          value={tickets.adult}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div>
        <label>Child</label>
        <input
          type="number"
          name="child"
          value={tickets.child}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div>
        <label>Senior Citizen</label>
        <input
          type="number"
          name="senior"
          value={tickets.senior}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div>
        <label>Infant</label>
        <input
          type="number"
          name="infant"
          value={tickets.infant}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div>
        <label>Disabled</label>
        <input
          type="number"
          name="disabled"
          value={tickets.disabled}
          onChange={handleChange}
          min="0"
        />
      </div>
      <button type="submit">Add to Cart</button>
    </form>
  );
}

export default BookingForm;
