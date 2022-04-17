import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo1.png';

const Header = () => {
    return (
        <Navbar className='py-0' collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container >
                <Navbar.Brand as={Link} to="/">
                    <img className='w-50 img-fluid' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link  as={Link} to="about">About</Nav.Link>
                        <Nav.Link href="#Services">Services</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="blog">Blog</Nav.Link>

                        <Nav.Link as={Link} eventKey={2} to="login">
                            Login
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;