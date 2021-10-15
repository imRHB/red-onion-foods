import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import logo from '../../images/logo-b.png';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();

    return (
        <div className="container my-5 text-center">
            <div className="my-4">
                <img className="logo" src={logo} alt="" />
            </div>
            <Form className="py-5 login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div>
                <p>or</p>
                <button className="btn btn-secondary" onClick={signInWithGoogle}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;