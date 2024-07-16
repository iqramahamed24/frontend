import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/dashboard/home/Home"
import Mainpage from "./pages/dashboard/mainpage/Mainpage"
import Income from "./pages/dashboard/income/Income";
import Budget from "./pages/dashboard/budget/Budget";
import Expenses from "./pages/dashboard/expenses/Expenses";
import LogOut from "./Components/LogOut";
import SignUp from "./pages/auth/Signup";
import Footer from "./pages/dashboard/Footer/Footer";
import './index.css'



function App() {

  return (
    <>
    
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mainpage" element={<Mainpage />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/income" element={<Income />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  </Router>
  </>
    
   
  )
}

export default App