import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    const user = false;
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand >Eats Extra</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle className='mx-2' style={{ fontSize: '2.5rem' }}></FaUserCircle>
                            }

                            {
                                user ? <Button variant="secondary">Logout</Button> : <Link to={`/login`}><Button variant="secondary">Login</Button></Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;