import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import images from '../../image/saiful.png';

const About = () => {
        const handleClickFacebook = () => {
            window.open("https://www.facebook.com/profile.php?id=100023720920409");
        };

        const handleClickLinkdin = () => {
          window.open("https://www.linkedin.com/in/saiful-islam-5394261b2/");
        };

        const handleClickTwitter = () => {
          window.open("https://twitter.com/MdSaifu56718035");
        };

      
    return (
        <Container>
            <h2 className='text-center mt-5'>About</h2>
                <Row className='my-5 bg-gradient bg-opacity-75 bg-dark p-2 show rounded'>
                    <Col xs={12} md={8}>
                        <div className='text-light p-5 fs-5 '>
                            <p className=' text-light font-italic'>Hello i am saiful  Very simple but not stupid.  I like to be busy at work.  I dream of becoming a future programmer.  So I do coding, whether I understand it or not.  I always like to learn something new.  My goal is to wait as long as it takes to be a programmer and persevere.  I come inshaAllah Allah will make me successful.</p>
                            <p className='text-center text'>saiful ..</p>
                        </div>
                        
                    </Col>
                    <Col xs={6} md={4}>
                        <img className='w-50  img-fluid border-5 border-primary rounded-3' src={images} alt="" />
                    </Col>
                    <hr className='w-100 mt-3 text-light' />
                    <Col  xs={12} md={8}>

                    </Col>
                    <Col xs={6} md={4}>
                        <h5 className='my-2 text-light'>Contact Me</h5>

                        <Button onClick={handleClickFacebook} className='text-light fs-3 m-1' to=''> <FaFacebook></FaFacebook> </Button>

                        <Button onClick={handleClickLinkdin} className='text-light fs-3 m-1' to=''> <FaLinkedinIn></FaLinkedinIn> </Button>

                        <Button onClick={handleClickTwitter} className='text-light fs-3 m-1' to=''> <FaTwitter></FaTwitter> </Button>
                    </Col>
                    
                </Row>
        </Container>
    );
};

export default About;