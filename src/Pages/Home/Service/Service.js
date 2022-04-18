import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateCheckOutPage = id => {
        navigate(`/service/${id}`)
    }

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
                <Button
                    onClick={() => navigateCheckOutPage(id)}  
                     variant="primary" size="lg">
                    Book: {name}  <span><FaArrowRight></FaArrowRight></span>
                </Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;