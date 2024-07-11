import React, { useState } from 'react';
import BudgetTable from './Pages/BudgetTable';
import BudgetForm from './Pages/BudgetForm';
import SearchBar from './Pages/FilterBudget';
import NavBar from './Pages/NavBar';

const App = () => {
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

export default App;


