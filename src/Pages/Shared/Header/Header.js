import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../image/logo1.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handlelogout = () => {
        signOut(auth);
    }

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


                    {   
                        user ?
                        <button className='btn btn-link text-decoration-none text-white' onClick={handlelogout}>Log Out</button>
                        :
                        <Nav.Link as={Link} eventKey={2} to="login">
                        Login
                        </Nav.Link>
                    
                    }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;