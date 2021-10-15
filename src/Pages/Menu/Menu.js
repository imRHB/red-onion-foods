import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Menu = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/fake-data/main/meals.json')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, []);

    return (
        <div className="container my-5">
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link href="#breakfast">Breakfast</Nav.Link>
                        <Nav.Link href="#lunch">Lunch</Nav.Link>
                        <Nav.Link href="#dinner">Dinner</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Row xs={1} md={2} lg={3} className="g-5">
                {
                    meals.map(meal => <Meal
                        meal={meal}
                    ></Meal>)
                }
            </Row>

            <div className="text-center">
                <button className="btn btn-outline-info my-4">Check Out Food</button>
            </div>
        </div>
    );
};

export default Menu;