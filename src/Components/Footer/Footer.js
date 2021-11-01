import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

// Codec for footer
const Footer = () => {
    return (
        <div className="bg-dark pt-5 m-0 pb-1">
            <Container>
                <footer>
                    <Row xs={1} md={4} className="g-4">
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Top Services</h4>
                            <div>
                                <p className="m-0 pt-1">Peru</p>
                                <p className="m-0 pt-1">New Zealand</p>
                                <p className="m-0 pt-1">Bhutan</p>
                                <p className="m-0 pt-1">Mexico</p>
                                <p className="m-0 pt-1">Spain</p>
                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Quick Links</h4>
                            <div>
                                <p className="m-0 pt-1">Home</p>
                                <p className="m-0 pt-1">Services</p>
                                <p className="m-0 pt-1">About us</p>
                                <p className="m-0 pt-1">Contact us</p>
                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3">Social Media</h4>
                            <div>
                                <p className="m-0 pt-1">Facebook</p>
                                <p className="m-0 pt-1">Instagram</p>
                                <p className="m-0 pt-1">Twitter</p>
                                <p className="m-0 pt-1">Youtube</p>
                                <p className="m-0 pt-1">Linked in</p>
                            </div>
                        </Col>
                        <Col className="text-white text-start">
                            <h4 className="pb-3 m-logo" >VROMON </h4>
                            <div>
                                <p className="m-0 pt-1">Green Road, Dhaka,<br /> Bangladesh.</p>
                                <p className="m-0 pt-1">+10 367 543 1234</p>
                                <p className="m-0 pt-1">info@vromon.com</p>
                            </div>
                        </Col>

                    </Row>

                    <h6 className="text-muted pt-5 pb-1">Copyright &copy; 2021 VROMON</h6>
                </footer>
            </Container>
        </div >
    );
};

export default Footer;