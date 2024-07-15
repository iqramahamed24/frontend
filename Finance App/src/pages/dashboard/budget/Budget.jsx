import React, { useState } from 'react';
import BudgetTable from './BudgetTable';
import BudgetForm from './BudgetForm';
import SearchBar from './FilterBudget';
import NavBar from './NavBar';
import './Budget.css'

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const [filteredBudgets, setFilteredBudgets] = useState([]);

  const handleAddBudget = (newBudget) => {
    setBudgets([...budgets, newBudget]);
    setFilteredBudgets([...filteredBudgets, newBudget]); 
  };

  const handleSearch = (searchTerm) => {
    const filtered = budgets.filter(budget =>
      budget.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBudgets(filtered);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="budget-form">
        <BudgetForm onSubmit={handleAddBudget} budgets={budgets} />
      </div>
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="transaction-table">
        <BudgetTable budgets={filteredBudgets} />
      </div>
    </div>
  );
};

export default Budget;


