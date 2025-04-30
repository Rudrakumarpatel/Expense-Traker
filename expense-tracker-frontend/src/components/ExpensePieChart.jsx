import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  YAxis,
  XAxis,
  Bar,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF69B4", "#A52A2A"];

const ExpensePieChart = ({ data }) => {
  const categoryMap = {};
  const monthMap = {};

  data.forEach((exp) => {
    const amount = Number(exp.amount);

    // Group by category
    categoryMap[exp.category] = (categoryMap[exp.category] || 0) + amount;

    // Group by month
    const month = new Date(exp.date).toLocaleString("default", { month: "short" });
    monthMap[month] = (monthMap[month] || 0) + amount;
  });

  const categoryData = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));

  const monthData = Object.entries(monthMap).map(([month, amount]) => ({
    month,
    amount,
  }));

  const renderLabel = ({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`;

  return (
    <>
      <PieChart width={400} height={300}>
        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderLabel}
          outerRadius={100}
          dataKey="value"
          nameKey="name"
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <h2 className="text-lg font-semibold mt-6 mb-2">Monthly Expenses</h2>
      <BarChart width={500} height={300} data={monthData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default ExpensePieChart;
