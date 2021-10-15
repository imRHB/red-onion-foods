import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Extras.css';
import exImg1 from '../../images/extra/extra-1.png';
import exImg2 from '../../images/extra/extra-2.png';
import exImg3 from '../../images/extra/extra-3.png';
import icon1 from '../../images/icon/icon-1.png';
import icon2 from '../../images/icon/icon-2.png';
import icon3 from '../../images/icon/icon-3.png';

const iconStyle = {
    width: '45px',
    height: '45px',
    margin: '0 12px'
}

const Extras = () => {

    return (
        <div className="container my-5">
            <div className="my-5">
                <h3>Why You Choose Us?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio beatae doloremque corporis suscipit ea quidem saepe laboriosam animi molestiae facilis?</p>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className="text-center rounded-3 border-0 extra-item">
                        <Card.Img variant="top" src={exImg1} />
                        <Card.Body>
                            <Card.Title>Fast Delivery</Card.Title>
                            <Card.Text>
                                <div className="d-flex">
                                    <img style={iconStyle} src={icon1} alt="" />
                                    <div className="text-start">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum aperiam eum commodi in perferendis nihil incidunt velit sunt maxime, eligendi veritatis hic mollitia excepturi quo voluptas molestiae reprehenderit qui?</p>
                                        <Link to="/service-details">See more</Link>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center rounded-3 border-0 extra-item">
                        <Card.Img variant="top" src={exImg2} />
                        <Card.Body>
                            <Card.Title>A Good Auto Responder</Card.Title>
                            <Card.Text>
                                <div className="d-flex">
                                    <img style={iconStyle} src={icon2} alt="" />
                                    <div className="text-start">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum aperiam eum commodi in perferendis nihil incidunt velit sunt maxime, eligendi veritatis hic mollitia excepturi quo voluptas molestiae reprehenderit qui?</p>
                                        <Link to="/service-details">See more</Link>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center rounded-3 border-0 extra-item">
                        <Card.Img variant="top" src={exImg3} />
                        <Card.Body>
                            <Card.Title>Home Delivery</Card.Title>
                            <Card.Text>
                                <div className="d-flex">
                                    <img style={iconStyle} src={icon3} alt="" />
                                    <div className="text-start">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum aperiam eum commodi in perferendis nihil incidunt velit sunt maxime, eligendi veritatis hic mollitia excepturi quo voluptas molestiae reprehenderit qui?</p>
                                        <Link to="/service-details">See more</Link>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Extras;