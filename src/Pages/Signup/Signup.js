import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Signup.css';
import logo from '../../images/logo-b.png';

const Signup = () => {

    return (
        <div className="container my-5 text-center">
            <div className="my-4">
                <img className="logo" src={logo} alt="" />
            </div>
            <Form className="py-5 signup-form">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        </div>
    );
};

export default Signup;