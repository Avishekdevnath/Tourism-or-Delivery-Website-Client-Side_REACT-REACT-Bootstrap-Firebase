import React from 'react';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css'
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Code for contact page
const Contact = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="" />;
    const phone = <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="" />;
    const email = <FontAwesomeIcon icon={faEnvelope} size="2x" className="" />;
    return (
        <div className=" contact">
            <Container>
                <div className="py-5">
                    <div className="pb-5 ">
                        <h2 className="fw-bold">Contact us</h2>
                        <h4>Feel free to contact with us anytime.</h4>
                    </div>
                    <Row xs={1} md={3} className="mx-auto g-4 align-content-center justify-content-center">
                        <Col className="">
                            <div>
                                <div className="i-contact mx-auto mb-3 text-white">{location}</div>
                                <div className="">
                                    <h5 className="fw-bold">Adress</h5>
                                    <h6>Green Road, Dhaka,<br /> Bangladesh.</h6>
                                </div>

                            </div>
                        </Col>
                        <Col className="">
                            <div>
                                <div className="i-contact mx-auto mb-3 text-white">{phone}</div>
                                <div className="">
                                    <h5 className="fw-bold">Phone</h5>
                                    <h6>+10 367 543 1234</h6>
                                </div>

                            </div>
                        </Col>
                        <Col className="">
                            <div>
                                <div className="i-contact mx-auto mb-3 text-white">{email}</div>
                                <div className="">
                                    <h5 className="fw-bold">Email</h5>
                                    <h6>info@vromon.com</h6>
                                </div>

                            </div>
                        </Col>
                    </Row>



                    <div className="py-5">
                        <h2 className="pb-4 fw-bold ">Get in touch with us</h2>
                        <div>
                            <Form.Group className="mb-3 " >
                                <Form.Control className="input-style" type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Control className="input-style py-3" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control className="input-style" type="text" placeholder="Subject" />
                            </Form.Group>


                            <Form.Group className="mb-3 " controlId="formGridCity">
                                <textarea className="form-control input-style" name="" id="" rows="10" placeholder="Your message here"></textarea>
                            </Form.Group>

                            <Button className="form-control c-button py-3" variant="primary" type="submit">
                                Send Message
                            </Button>
                        </div>


                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;