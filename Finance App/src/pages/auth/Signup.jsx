import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function SignUp() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/')
  }
  return (
    <section className="homepage-container">
      <div className="centered-form">
          <div className="login-form p-4">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"  required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
              </Form.Group>
              <Button type='submit' className='btn btn-primary w-100'>
                Sign Up
              </Button>
              <NavLink to="/" className="btn btn-link d-block mt-3">
              Already have an account? Log in
              </NavLink>
            </Form>
          </div>
      </div>
    </section>
  );
}

export default SignUp;
