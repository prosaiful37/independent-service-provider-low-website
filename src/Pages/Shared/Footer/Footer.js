import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mony from '../../../image/mony.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer  className='bg-dark py-3'>
            <Container>
                <Row>
                    <Col sm>
                        <p className='text-light'>LegalPress Template Made by  
                            <span className='ms-2'>
                                <Link className='text-decoration-none ' to={'/'}>Lawyer</Link>
                            </span>
                        </p>
                    </Col>
                    <Col sm>
                        <img className='w-50 h-80' src={mony} alt="" />
                    </Col>
                    <Col sm>
                    <p className='text-center text-white'>
                        <small>Copywrite © {year} All rights reserved.</small>
                    </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;