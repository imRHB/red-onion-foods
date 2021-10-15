import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Item.css';

const Item = (props) => {
    const { itemId, itemTitle, itemImg, itemDetails, itemPrice } = props.bf;
    console.log(itemId);
    return (
        <div>
            <Col>
                <Card className="text-center p-4 rounded-3 border-0 meal-item">
                    <Card.Img variant="top" src={itemImg} />
                    <Card.Body>
                        <Card.Title>{itemTitle}</Card.Title>
                        <Card.Text>
                            {itemDetails}
                        </Card.Text>
                        <Card.Text>
                            <p className="fs-4 fw-bold">${itemPrice}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Item;