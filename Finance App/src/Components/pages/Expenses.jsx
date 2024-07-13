import React, { useState, useEffect } from "react";

const Expenses = () => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseOption, setExpenseOption] = useState("");
  const [expenseReference, setExpenseReference] = useState("");
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage on component mount
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
    const savedTotalExpense = savedExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    setTotalExpense(savedTotalExpense);
  }, []);

  const addExpense = () => {
    const amount = parseFloat(expenseAmount);
    if (!isNaN(amount)) {
      setTotalExpense(totalExpense + amount);
      const newExpense = {
        title: expenseTitle,
        amount: amount,
        date: expenseDate,
        option: expenseOption,
        reference: expenseReference,
      };
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);

      // Save to localStorage
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    }
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate("");
    setExpenseOption("");
    setExpenseReference("");
  };

  return (
    <div className="expenses-container">
      <h1>Expenses</h1>
      <div className="total-expense">
        Total Expense:{" "}
        <span style={{ color: "green" }}>${totalExpense.toFixed(2)}</span>
      </div>
      <div className="expense-form">
        <input
          type="text"
          placeholder="Expense Title"
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <input
          type="date"
          placeholder="Enter A Date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
        />
        <select
          value={expenseOption}
          onChange={(e) => setExpenseOption(e.target.value)}
        >
          <option value="">Select Option</option>
          <option value="Option 1">Education</option>
          <option value="Option 2">Entertainment</option>
          <option value="Option 3">Health</option>
          <option value="Option 4">Shopping</option>
          <option value="Option 5">Transportation</option>
          <option value="Option 6">Other</option>
        </select>
        <input
          type="text"
          placeholder="Add A Reference"
          value={expenseReference}
          onChange={(e) => setExpenseReference(e.target.value)}
        />
        <button onClick={addExpense}>+ Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expense List</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <div>Title: {expense.title}</div>
              <div>Amount: ${expense.amount.toFixed(2)}</div>
              <div>Date: {expense.date}</div>
              <div>Category: {expense.option}</div>
              <div>Reference: {expense.reference}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expenses;
