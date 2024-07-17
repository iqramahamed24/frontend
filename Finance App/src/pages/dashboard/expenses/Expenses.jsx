import React, { useState } from 'react';
import ExpensesTable from './ExpensesTable';

const Expenses = () => {
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');
    const [expenseOption, setExpenseOption] = useState('');
    const [expenseDescription, setExpenseDescription] = useState('');
    const [totalExpense, setTotalExpense] = useState(0);
    const [expenses, setExpenses] = useState([]);

    const addExpense = () => {
        const amount = parseFloat(expenseAmount);
        if (!isNaN(amount)) {
            setTotalExpense(totalExpense + amount);
            const newExpense = {
                amount: expenseAmount,
                date: expenseDate,
                category: expenseOption,
                description: expenseDescription,
            };
            setExpenses([...expenses, newExpense]);
        }
        setExpenseAmount('');
        setExpenseDate('');
        setExpenseOption('');
        setExpenseDescription('');
    };

    return (
        <div className="expenses-container p-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Expenses</h1>
            <div className="total-expense text-center mb-6 text-xl">
                Total Expense: <span className="text-green-500">${totalExpense.toFixed(2)}</span>
            </div>
            <div className="expense-form grid grid-cols-1 gap-4">
                <input
                    type="number"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Expense Amount"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                />
                <input
                    type="date"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={expenseDate}
                    onChange={(e) => setExpenseDate(e.target.value)}
                />
                <select
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Add A Description"
                    value={expenseDescription}
                    onChange={(e) => setExpenseDescription(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={addExpense}
                >
                    + Add Expense
                </button>
            </div>
            <div className="mt-8">
                <ExpensesTable expenses={expenses} />
            </div>
        </div>
    );
};

export default Expenses;
