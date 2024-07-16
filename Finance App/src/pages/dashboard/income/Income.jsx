import React, { useEffect, useState, useRef } from "react";
import "./Income.css";
import { Button, Form, Modal } from "react-bootstrap";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { BASE_URL } from "../../../data/data";

const Income = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    source: "",
    amount: "",
    date: "",
  });

useEffect(()=> {
  fetch (`${BASE_URL}/expenses`).then((res) => res.json ()).then((data) => console.log(data) ).catch((error) => console.log(error))
}, [])

  const [incomeData, setIncomeData] = useState([
    { id: 1, source: "Salary", amount: 50000, date: "2024-07-01" },
    { id: 2, source: "Freelance", amount: 3000, date: "2024-07-03" },
    { id: 3, source: "Investments", amount: 10000, date: "2024-07-05" },
  ]);

  const chartRef = useRef(null);
  const [pieChartInstance, setPieChartInstance] = useState(null);


  const handleAddNewIncome = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ source: "", amount: "", date: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      id: incomeData.length + 1,
      source: formData.source,
      amount: parseFloat(formData.amount),
      date: formData.date,
    };
    setIncomeData((prevIncomeData) => [...prevIncomeData, newIncome]);
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="mb-4">Income Details</h2>
      <div className="container mt-5">
        <Button onClick={handleAddNewIncome} className="add-income-btn">
          <AddCircleIcon className="me-2" /> Add New Income
        </Button>
        <table className="income-table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Source</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((income) => (
              <tr key={income.id}>
                <th scope="row">{income.id}</th>
                <td>{income.source}</td>
                <td>{income.amount}</td>
                <td>{income.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Income</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formSource">
                <Form.Label>Source</Form.Label>
                <Form.Control
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formAmount" className="mt-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDate" className="mt-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit" className="btn-second">
                Add Income
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <div className="chart-container mt-5">
          <Pie
            data={{
              labels: incomeData.map((income) => income.source),
              datasets: [
                {
                  label: "Income Sources",
                  data: incomeData.map((income) => income.amount),
                  backgroundColor: ["#1d528b", "#3f85c7", "#7c97b1"],
                  hoverOffset: 4,
                },
              ],
            }}
            className="pie-chart"
          />
          <div className="chart-label">Income Chart</div>
        </div>
      </div>
    </div>
  );
};

export default Income;
