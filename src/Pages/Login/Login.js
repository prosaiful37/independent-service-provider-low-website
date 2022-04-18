import React, { useRef } from 'react';
import { Button ,Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    

    if(user){
        navigate('/');
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <div>
            <p>Error: {error.message}</p>
            </div>
        );
    }

    const handleSubmitForm = async(event) =>{
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)

    }

    const hanldeResetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);

        if(email){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Check your email',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else{
            Swal.fire('Please Give you Email');
        }
          


    }



    // redirect to signup page register
    const navigateRegister = () =>{
        navigate('/register');
    }

    return (
        <div className='container w-100'>
        <h3 className='text-center mt-3'>LogIn to Continue</h3>
            <Form onSubmit={handleSubmitForm} className='w-75 mx-auto border mt-2 p-5 bg-info rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <p className='mt-3'>Reset Password <span className='text-light' style={{cursor: 'pointer'}} onClick={hanldeResetPassword}>Forgot Password</span></p>
                    <Button  variant="secondary" type="submit">
                    Get Started
                    </Button>
                

                <p className='mt-3'>Dont't have an Account? <span className='text-light' style={{cursor: 'pointer'}} onClick={navigateRegister}>SIGN UP</span></p>  
            </Form>
            
            
        </div>
       
    );
};

export default Login;
