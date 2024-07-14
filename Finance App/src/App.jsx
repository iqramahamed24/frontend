import Expenses from "./Components/pages/Expenses";
import { useState } from "react";
import ExpensesTable from "./Components/pages/ExpensesTable";


function App() {
  return (
    <div>
      <Expenses />
      <ExpensesTable />
      
    </div>
  );
}

export default App;
