import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <Col>
            <Card className=' shadow'>
                <Card.Img  variant="top" src={img} />
                <Card.Body>
                <Card.Title> <h3>{name}</h3> </Card.Title>
                <Card.Text>
                    <p>Price: <span className='text-danger'>${price}</span></p>
                    <p>{description}</p>
                </Card.Text>
                <Button variant="primary" size="lg">
                    {name} <span><FaArrowRight></FaArrowRight></span>
                </Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;