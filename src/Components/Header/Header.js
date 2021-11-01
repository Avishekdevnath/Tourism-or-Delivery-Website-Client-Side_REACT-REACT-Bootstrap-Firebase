import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

// Code for header section
const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <Navbar bg="light" className="header-style" expand="lg" sticky="top">
            <Container >
                <Navbar.Brand href="#home"> <Link className="brand-text" to="/home"><h4 className="m-logo" > VROMON </h4></Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav
                        className="ms-auto my-2 my-lg-0 m-auto  mt-auto mb-auto"
                        style={{ maxHeight: '200px' }}
                    >
                        <Nav.Link className="nav-text ms-3" as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link className="nav-text ms-3" as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link className="nav-text ms-3" as={Link} to='/about'>About us</Nav.Link>
                        <Nav.Link className="nav-text ms-3" as={Link} to='/contact'>Contact us</Nav.Link>



                    </Nav>
                    <Nav className="ms-auto my-2  m-auto  mt-auto mb-auto"
                        style={{ maxHeight: '200px' }}
                    >
                        {user?.email ? <>
                            <NavDropdown className="mt-auto mb-auto m-auto" title="My Profile" >
                                <NavDropdown.Item as={Link} to="/home" className=""><h6 className="m-auto">{user.displayName}</h6></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addnewservice" className="">Add New Service</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myorders" className="">My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/manageAllOrders" className="">Manage All Orders</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link>
                                <Button onClick={logOut} className="btn btn-danger ">
                                    Log out
                                </Button>
                            </Nav.Link>
                        </>
                            : <Nav.Link as={Link} to='/login'>
                                <Button className="btn btn-success ">
                                    Sign in
                                </Button>

                            </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;

