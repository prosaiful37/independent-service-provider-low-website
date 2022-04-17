import React from 'react';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import reg from '../../../image/reg.jpg'

const Register = () => {
    const navigate = useNavigate();





    // navigate return to login page
    const loginNavigate = () => {
        navigate('/login');
    }
    return (
        <Container>
            <Row>
                <Col md={6} sm>
                    <img className='w-75 img-fluid' src={reg} alt="" />
                </Col>
                <Col md={6} sm>
                    <Form className=' p-5 mt-5 bg-dark text-light'>
                        <h5>Registration info</h5>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className='mt-3'>Already Have An Account? <span style={{cursor: 'pointer'}} className='text-primary register' onClick={loginNavigate}>Please Login</span></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;