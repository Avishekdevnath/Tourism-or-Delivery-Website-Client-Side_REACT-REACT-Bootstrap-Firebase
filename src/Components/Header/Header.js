import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

// Code for header section
const Header = () => {
    const { allContexts } = useAuth();
    const { user, logOut } = allContexts;
    return (

        <Navbar bg="light" expand="lg" sticky="top">
            <Container >
                <Navbar.Brand href="#home"> <Link className="brand-text" to="/home"><h4 className="m-logo" > VROMON </h4></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 m-auto  mt-auto mb-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="nav-text ms-3" as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link className="nav-text ms-3" as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link className="nav-text ms-3" as={Link} to='/about'>About us</Nav.Link>
                        <Nav.Link className="nav-text ms-3" as={Link} to='/contact'>Contact us</Nav.Link>


                    </Nav>
                    <Nav className="ms-auto my-2 my-lg-0 m-auto  mt-auto mb-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <NavDropdown className="mt-auto mb-auto m-auto" title="User" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" className=""><h6 className="m-auto">{user.displayName}</h6></NavDropdown.Item>
                            <NavDropdown.Item href="#action3" className="">Add New Service</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" className="">My Orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action4" className="">Manage All Orders</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link as={Link} to='/login'>
                            <Button className="btn btn-success ">
                                Sign in
                            </Button>
                        </Nav.Link>
                        <Nav.Link>
                            <Button className="btn btn-danger ">
                                Log out
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top" className="header-style">
        //     <Container>
        //         <Navbar.Brand href="#home"> <Link className="brand-text" to="/home"><h4 className="m-logo" > VROMON </h4></Link></Navbar.Brand>

        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-warning" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="m-auto  mt-auto mb-auto" >
        //                 <Link className="nav-text ms-3" to='/home'>Home</Link>
        //                 <Link className="nav-text ms-3" to='/services'>Services</Link>
        //                 <Link className="nav-text ms-3" to='/about'>About us</Link>
        //                 <Link className="nav-text ms-3" to='/contact'>Contact us</Link>


        //                 {/* {user?.email && <h6 className="text-white my-auto ms-2">{user.displayName}</h6>}
        //                 {user?.email ?
        //                     <Button onClick={logOut} className="btn btn-primary mx-2 py-0" variant="light">Logout</Button> :
        //                     <>
        //                         <Link className="nav-text ms-3" to="/login">Login</Link>
        //                         <Link className="nav-text ms-3" to="/signup">Sign up</Link>
        //                     </>
        //                 } */}


        //             </Nav>
        //             <Nav>
        //                 <Link className="nav-item dropdown">
        //                     <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                     </div>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <li><div className="dropdown-item" href="#">Action</div></li>
        //                         <li><div className="dropdown-item" href="#">Another action</div></li>
        //                         <li><hr className="dropdown-divider" /></li>
        //                         <li><div className="dropdown-item" href="#">Something else here</div></li>
        //                     </ul>
        //                 </Link>
        //             </Nav>
        //             <Nav className="ms-auto  mt-auto mb-auto">

        //                 <Link>
        //                     <Button className="btn btn-success ">
        //                         Sign in
        //                     </Button>
        //                 </Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

    );
};

export default Header;

