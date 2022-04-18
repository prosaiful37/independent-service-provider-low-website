import React, { useRef } from 'react';
import { Button ,Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    

    if(user){
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>;
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
        <div className='container '>
        <h3 className='text-center mt-3 w-100'>LogIn to Continue</h3>
            <Form onSubmit={handleSubmitForm} className='w-75 mx-auto border mt-2 p-5 text-dark shadow rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>


                <Button  variant="secondary" type="submit">
                Get Started
                </Button>


                <p className='mt-3'>Reset Password <span className='text-primary' style={{cursor: 'pointer'}} onClick={hanldeResetPassword}>Forgot Password</span></p>

                <p className='mt-3'>Dont't have an Account? <span className='text-primary' style={{cursor: 'pointer'}} onClick={navigateRegister}>SIGN UP</span></p>

            </Form>
            
            <div className='containr w-50 mx-auto'>
                <SocialLogin></SocialLogin>
            </div>
              
            
            
        </div>
       
    );
};

export default Login;
