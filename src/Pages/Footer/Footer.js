import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandIconW from '../../images/logo-w.png';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container py-5">
                <Row sm={1} md={2} lg={3}>
                    <Col>
                        <img src={brandIconW} style={{ width: '128px' }} alt="" />
                    </Col>
                    <Col className="d-flex flex-column">
                        <Link to="/about">About Us</Link>
                        <Link to="/blog">Read Our Blog</Link>
                        <Link to="/signup">Sign up</Link>
                        <Link to="/add-your-restaurant">Add Your restaurant</Link>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Link to="/get-help">Get Help</Link>
                        <Link to="/read-faqs">Read FAQs</Link>
                        <Link to="/view-all">View All Restaurant</Link>
                        <Link to="/nearest-restaurant">Nearest Restaurant</Link>
                    </Col>
                </Row>
                <div className="text-light text-center my-5">
                    <p><small>Copyright 2021 : Red Onion Foods</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;