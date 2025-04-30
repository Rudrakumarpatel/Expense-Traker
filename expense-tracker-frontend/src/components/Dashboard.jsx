// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import ExpensePieChart from '../components/ExpensePieChart';

const Dashboard = ({expenses}) => {

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Expense Distribution by Category</h2>
      <ExpensePieChart data={expenses} />
    </div>
  );
};

export default Dashboard;
