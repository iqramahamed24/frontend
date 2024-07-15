import React from 'react';
import './Budget.css'


const BudgetTable = ({ budgets }) => {
  return (
    <div className='budget-table container'>
    <table className='budget-table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {budgets.map((budget, index) => (
          <tr key={index}>
            <td>{budget.date}</td>
            <td>{budget.description}</td>
            <td>{budget.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default BudgetTable;