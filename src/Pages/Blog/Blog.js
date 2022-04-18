import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';
import blog1 from '../../image/blog/blog1.png';
import blog2 from '../../image/blog/blog2.png';
import blog3 from '../../image/blog/blog3.png';

const Blog = () => {
    return (
        <Container>
            <h2 className='text-center my-4'>My Blog</h2>
            <Row className='my-5'>
                <Col sm={12} md={6}>
                    <div>
                        <h2>Difference between authorization and authentication?</h2>
                        <p> <span><b>Authorization:</b></span> Authorization actually controls how much I can access authentication resources.  Authentication is the process of submitting an email and password from authentication.  This means authorization will give full power.</p>
                        <p> <span><b>Authentication:</b></span> authentication is my user name cardinal that is authentication.  authentication user name is identified and email is detected.  If the username and email and password are given correctly, authentication works.  The whole system works depending on AAA.</p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div>
                        <img className='w-100 img-fluid' src={blog1} alt="" />
                    </div>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col sm={12} md={6}>
                    <div>
                        <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p>Firebase is a cloud storage system.  Mobile and data can be stored here.  Firebase is used to develop many apps.  We use Firebase to manage the authentication system.  Also many more works..</p>
                        <p>Also many more works authntication implement like single factor, two factor auth and single sign in or multifactor auth system add this implement option.</p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div>
                        <img className='w-100 img-fluid' src={blog2} alt="" />
                    </div>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col sm={12} md={6}>
                    <div>
                        <h2>What other services does firebase provide other than authentication?</h2>
                        <p>Firebase is definitely a good Authentication system.  In addition to the auth system, Firebase also does other things.  Such as cloud firestore, hosting, cloud storage, google analytics, cloud massaging, hosting, etc.  This is the exta advantage of firebase.</p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div>
                        <img className='w-100 img-fluid' src={blog3} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;