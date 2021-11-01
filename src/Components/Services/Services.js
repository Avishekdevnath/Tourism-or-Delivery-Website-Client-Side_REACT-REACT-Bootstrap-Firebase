import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faPlaneDeparture, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Services.css'


// Code for Services
const Services = () => {
    const clock = <FontAwesomeIcon icon={faClock} className="" />;
    const plane = <FontAwesomeIcon icon={faPlaneDeparture} className="" />;
    const rate = <FontAwesomeIcon icon={faSmile} className="" />;
    const people = <FontAwesomeIcon icon={faUsers} className="" />;


    const { services } = useAuth();


    return (
        <div className="py-5">
            <Container>
                <h2 className="text-regular fw-bold">Our Services
                </h2>
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        services
                            .map(service => {

                                const { id, picture, title, price, shortDescription, description, rating, date, maxPeople, time } = service;
                                return (<Col key={id}>
                                    <Card className="card h-100">
                                        <div className="img-container">
                                            <Card.Img variant="top" src={picture} className='image' />
                                        </div>
                                        <Card.Body >
                                            <div className="text-start">
                                                <h4 className="fw-bold">{title}</h4>
                                                <h5>Price: ${price} </h5>

                                                <p>{shortDescription}</p>
                                                <div className="mt-2">
                                                    <hr />
                                                    <div>
                                                        <p className="d-flex flex-row"><span>{plane}</span> <span className="ms-3">{date}</span></p>
                                                    </div>
                                                    <hr />
                                                    <div>
                                                        <p className="d-flex flex-row"><span>{clock}</span> <span className="ms-3">{time} days</span></p>
                                                    </div>
                                                    <hr />
                                                    <div>
                                                        <p className="d-flex flex-row"><span>{rate}</span> <span className="ms-3">{rating}/5</span></p>
                                                    </div>
                                                    <hr />
                                                </div>
                                            </div>
                                            <div className="">

                                                <Link to={`/service/${id}`} className=""> <button className="btn btn-success ">Book Now</button> </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>)
                            })
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Services;

