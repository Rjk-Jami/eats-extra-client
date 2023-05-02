import React, { useContext } from 'react';
import { Button, Container, Image, Nav, NavDropdown, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import logo from '../../../assets/logo.png'
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogOut =()=>{
        logOut()
        
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {user?.displayName}
        </Tooltip>
      );
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
                    <Navbar.Brand  className='fw-semibold' ><span className='fw-bold'>E</span>ats <span className='fw-bold'>E</span>xtra</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            
                            {
                                user &&  <>
                                <OverlayTrigger
                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                              >
                                {
                                    user?.photoURL? <Image roundedCircle style={{height:50, width:50}}  src={user.photoURL}  className="d-inline-block align-top" /> : <FaUserCircle className='mx-2' style={{ fontSize: '2.5rem' }}></FaUserCircle>
                                }
                              </OverlayTrigger>
                                </>
                            }

                            {
                                user ? <Button onClick={handleLogOut} className='bg-dark bg-gradient fw-semibold
                                ms-3 '>Logout</Button> : <Link to={`/login`}><Button className='fw-semibold' variant='warning'>Login</Button></Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;