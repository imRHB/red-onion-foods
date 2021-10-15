import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import brandIcon from '../../images/logo-b.png';

const NavBar = () => {
    const history = useHistory();

    const handleSignup = () => {
        history.push('/signup');
    }

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top">
                <Container className="mx-auto">
                    <Navbar.Brand href="#home"><img src={brandIcon} style={{ width: '128px' }} alt="" /></Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <button className="btn btn-danger" onClick={handleSignup}>Signup</button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;