import React from 'react';
import './ExpensesTable.css';

const ExpensesTable = ({ expenses }) => {
    if (!expenses || expenses.length === 0) {
        return <div className='text-center'><b>Expenses Tracker</b></div>;
    } else {
        return (
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-blue-500 text-white">Amount</th>
                        <th className="py-2 px-4 bg-blue-500 text-white">Date</th>
                        <th className="py-2 px-4 bg-blue-500 text-white">Category</th>
                        <th className="py-2 px-4 bg-blue-500 text-white">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b border-gray-200">{expense.amount}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{expense.date}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{expense.category}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{expense.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
};

export default ExpensesTable;
