import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faPlaneDeparture, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Code for top services
const TopServices = () => {

    const clock = <FontAwesomeIcon icon={faClock} className="" />;
    const plane = <FontAwesomeIcon icon={faPlaneDeparture} className="" />;
    const rate = <FontAwesomeIcon icon={faSmile} className="" />;
    const people = <FontAwesomeIcon icon={faUsers} className="" />;


    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://gentle-gorge-22589.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const filteredServices = services.filter(service => service.id <= 6)

    return (
        <div className="container py-5">
            <h1 className="py-5 fw-bold">Top Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    filteredServices.map(service => {
                        const { _id, picture, title, price, shortDescription, description, rating, date, maxPeople, time } = service;
                        return (<Col key={_id}>
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

                                        <Link to={`/service/${_id}`} className=""> <button className="btn btn-success ">Book Now</button> </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    })
                }
            </Row>
            <Link to="/services"><button className="btn btn-primary my-5">More</button></Link>
        </div>
    );
};

export default TopServices;