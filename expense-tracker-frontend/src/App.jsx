import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';
import { getExpenses, addExpense, updateExpense, deleteExpense } from './services/expenseService';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  const handleAddOrUpdate = async (expense) => {
    if (editExpense) {
      await updateExpense(editExpense._id, expense);
      setEditExpense(null);
    } else {
      await addExpense(expense);
    }
    fetchExpenses();
  };

  const handleEdit = (expense) => {
    setEditExpense(expense);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchExpenses();
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onSubmit={handleAddOrUpdate} expense={editExpense} />
      <ExpenseList expenses={expenses} onEdit={handleEdit} onDelete={handleDelete} />
      <Dashboard expenses={expenses} />
    </div>
  );
};

export default App;
