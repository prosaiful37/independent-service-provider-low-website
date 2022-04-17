import React from 'react';
import { Button ,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import avater from '../../image/avater.png';

const Login = () => {
    const navigate = useNavigate();



    // redirect to signup page register
    const navigateRegister = () =>{
        navigate('/register');
    }

    return (
        <div className='container w-100'>
        <h3 className='text-center mt-3'>LogIn to Continue</h3>
            <Form className='w-75 mx-auto border mt-2 p-5 bg-info rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button  variant="secondary" type="submit">
                    Get Started
                </Button>

                <p className='mt-3'>Dont't have an Account? <span className='text-light' style={{cursor: 'pointer'}} onClick={navigateRegister}>SIGN UP</span></p>
            </Form>
            
            
        </div>
       
    );
};

export default Login;
