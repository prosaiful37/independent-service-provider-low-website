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
            <Row>
                <Col sm={12} md={12}>
                    {errorElement}
                    <Button 
                        onClick={() => signInWithGoogle()}
                        variant='secondary'  className='mt-3'>
                        <img width={20} src={google} alt="" />
                        <span className='text-white'>Continue with google</span>  
                    </Button>
                </Col>
                <Col sm={12} md={12}>
                    <Button 
                        onClick={() => signInWithFacebook()}
                        variant='secondary'  className='mt-3'>
                        <img width={20} src={facebook} alt="" />
                        <span className='text-white'>Continue with Facebook</span>  
                    </Button>
                </Col>
                <Col sm={12} md={12}>
                    <Button 
                        onClick={() => signInWithGithub()}
                        variant='secondary'  className='mt-3'>
                        <img width={20} src={github} alt="" />
                        <span className='text-white'>Continue with Github</span>  
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SocialLogin;