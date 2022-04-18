import React from 'react';
import google from '../../../image/social/google.png';
import facebook from '../../../image/social/facebook.png';
import github from '../../../image/social/github.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();



    if(user || user1 || user2){
        navigate('/');
    }

    if(loading || loading1 || loading2){
        return <Loading></Loading>
    }

    let errorElement;
    if (error || error1 || error2) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p> 
    }

    return (
        <Container>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
            </div>
            <Row>
                <Col sm={12} md={12}>
                    {errorElement}
                    <button 
                        onClick={() => signInWithGoogle()}
                        style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary mb-2'>
                        <img style={{width: '25px', marginRight: '3px'}}  src={google} alt="" />
                        <span className='fw-bold text-secondary' >CONTINUE WITH GOOGLE</span>  
                    </button>
                </Col>
                <Col sm={12} md={12}>
                    <button 
                        onClick={() => signInWithFacebook()}
                        style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary mb-2'>
                        <img style={{width: '25px', marginRight: '3px'}}  src={facebook} alt="" />
                        <span className='fw-bold text-secondary'>CONTINUE WITH FACEBOOK</span> 
                    </button>
                </Col>
                <Col sm={12} md={12}>
                    <button 
                        onClick={() => signInWithGithub()}
                        style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary'>
                        <img style={{width: '25px', marginRight: '3px'}}  src={github} alt="" />
                        <span className='fw-bold text-secondary'>CONTINUE WITH GITHUB</span> 
                    </button>
                </Col>
            </Row>
        </Container>
    );
};

export default SocialLogin;