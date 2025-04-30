import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ expense = null, onSubmit }) => {
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    if (expense) {
      setFormData({
        amount: expense.amount || '',
        category: expense.category || '',
        description: expense.description || '',
        date: expense.date ? expense.date.slice(0, 10) : '' // for date input
      });
    }
  }, [expense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ amount: '', category: '', description: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">{expense ? 'Update' : 'Add'} Expense</button>
    </form>
  );
};

export default ExpenseForm;
