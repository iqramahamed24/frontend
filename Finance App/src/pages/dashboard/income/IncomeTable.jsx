import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Income.css';
import { BASE_URL } from '../../../data/data'; // Ensure this path is correct

const IncomeTable = ({ incomeData, setIncomeData }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    source: "",
    amount: "",
    date: "",
  });

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
    fetch(`${BASE_URL}/income`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(newIncome => {
      setIncomeData([...incomeData, newIncome]);
      setShowModal(false);
      setFormData({ source: "", amount: "", date: "" });
    })
    .catch(error => {
      console.error('Error adding income:', error);
    });
  };

  return (
    <div>
      <Button onClick={handleAddNewIncome} className="add-income-btn">
        <AddCircleIcon className="me-2" /> Add New Income
      </Button>

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
            <Button type="submit" className="btn-second mt-3">
              Add Income
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default IncomeTable;
