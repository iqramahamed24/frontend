import React, { useState } from 'react';

const BudgetForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: '',
      description: '',
      amount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;