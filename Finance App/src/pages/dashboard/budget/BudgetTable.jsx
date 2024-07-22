import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../data/data';
import './Budget.css';

const BudgetTable = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/budget`)
      .then((res) => res.json())
      .then((data) => {
        setBudgets(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
