import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CIcon from '@coreui/icons-react';
import { cilCreditCard, cilUser } from '@coreui/icons';
import { Bar } from 'react-chartjs-2';
import './Mainpage.css';

function MainPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const data = {
    labels: ['Budget', 'Income', 'Expenses', 'Balance'],
    datasets: [
      {
        label: 'Financial Overview',
        data: [5000, 8500, 4000, 20000],
        backgroundColor: ['#3f85c7', '#1d528b', '#7c97b1', '#4CAF50'],
        hoverBackgroundColor: ['#255c91', '#143759', '#5c7696', '#3D8B37'],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [8, 4],
        },
      },
    },
  };

  return (
    <div className="main-page">
      <div className="dashboard-header">
        <Button className="toggle-button" onClick={handleToggleSidebar}>
          <CIcon icon={cilUser} height={30} />
        </Button>
      </div>
      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <Card className="h-100">
          <Card.Body>
            <div className="sidebar-links">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/expenses" className="nav-link">Expenses</Link>
                </li>
                <li className="nav-item">
                  <Link to="/budget" className="nav-link">Budget</Link>
                </li>
                <li className="nav-item">
                  <Link to="/income" className="nav-link">Income</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Logout</Link>
                </li>
              </ul>
            </div>
            <Button className="toggle-button toggle-button-bottom" onClick={handleToggleSidebar}>
              Close
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="main-content">
        <Container fluid>
          <Row>
            <Col md={3} className={`sidebar-col ${showSidebar ? 'show' : ''}`}>
              <Card className="h-100">
                <Card.Body className="content-card">
                  <h2>Financial Overview</h2>
                  <Row className="mb-4">
                    <Col>
                      <Card className="content-card">
                        <Card.Body>
                          <CIcon icon={cilCreditCard} height={40} className="icon" />
                          <h5>Expenses</h5>
                          <Link to="/expenses" className="btn btn-primary mt-3">View Expenses</Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <Card className="content-card">
                        <Card.Body>
                          <h5>Budget</h5>
                          <Link to="/budget" className="btn btn-primary mt-3">View Budget</Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <Card className="content-card">
                        <Card.Body>
                          <h5>Income</h5>
                          <Link to="/income" className="btn btn-primary mt-3">View Income</Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className="content-card">
                        <Card.Body>
                          <h5>Balance</h5>
                          <p>Current balance: KSH 5000</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={9} className={`main-col ${showSidebar ? 'collapsed' : ''}`}>
              <Card className="h-100">
                <Card.Body className="content-card">
                  <h2>Financial Overview</h2>
                  <Bar data={data} options={options} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MainPage;
