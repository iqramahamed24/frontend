// ExpensesTable.jsx
import React from 'react';
import './ExpensesTable.css';


const ExpensesTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Reference</th>
                </tr>
            </thead>
            <tbody>
                {/* Table rows will be added here */}
            </tbody>
        </table>
    );
};

export default ExpensesTable;
