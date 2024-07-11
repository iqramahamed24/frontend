import React from 'react';

const BudgetTable = ({ budgets }) => {
  return (
    <table>
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
  );
};

export default BudgetTable;