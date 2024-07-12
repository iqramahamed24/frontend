import React, { useState } from 'react';
import { Button } from 'react-bootstrap';




const Expenses = () => {
    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');
    const [expenseOption, setExpenseOption] = useState('');
    const [expenseReference, setExpenseReference] = useState('');
    const [totalExpense, setTotalExpense] = useState(0);

    const addExpense = () => {
        const amount = parseFloat(expenseAmount);
        if (!isNaN(amount)) {
            setTotalExpense(totalExpense + amount);
        }
        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');
        setExpenseOption('');
        setExpenseReference('');
    };

    return (
        <div className="expenses-container">
            <h1>Expenses</h1>
            <div className="total-expense">
                Total Expense: <span style={{ color: 'green' }}>${totalExpense.toFixed(2)}</span>
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
                    <option value="Option 1">Educational</option>
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
        </div>
    );
};

export default Expenses;
