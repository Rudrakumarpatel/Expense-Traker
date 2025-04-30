import React from 'react';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense._id} className="expense-item">
          <p>Amount: {expense.amount}</p>
          <p>Category: {expense.category}</p>
          <p>Description: {expense.description}</p>
          <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
          <button onClick={() => onEdit(expense)}>Edit</button>
          <button onClick={() => onDelete(expense._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
