import React from 'react';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import reg from '../../../image/reg.jpg'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
        const navigate = useNavigate();
        const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    if(user){
        navigate('/');
    }

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (error || error1) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

    //handle registration form
    const handleRegister = async(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
          Swal.fire('Sent email')
    }
    // navigate return to login page
    const loginNavigate = () => {
        navigate('/login');
    }
    return (
        <Container>
            <Row>
                <Col md={6} sm>
                    <img className='w-100 img-fluid  mt-4 rounded' src={reg} alt="" />
                </Col>
                <Col md={6} sm>
                    <Form onSubmit={handleRegister} className=' p-5 mt-5  text-dark rounded shadow'>
                        <h5>Registration info</h5>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" name='name' placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className='mt-3'>Already Have An Account? <span style={{cursor: 'pointer'}} className='text-primary register' onClick={loginNavigate}>Please Login</span></p>
                        
                        <SocialLogin></SocialLogin>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;