import { faClock, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faPlaneDeparture, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ConfirmOrder from '../Confirm Order/ConfirmOrder';

// Code For Service section
const Service = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const { _id, picture, title, price, shortDescription, description, rating, date, maxPeople, time } = service;

    const clock = <FontAwesomeIcon icon={faClock} className="" />;
    const plane = <FontAwesomeIcon icon={faPlaneDeparture} className="" />;
    const rate = <FontAwesomeIcon icon={faSmile} className="" />;
    const people = <FontAwesomeIcon icon={faUsers} className="" />;


    return (
        <div>
            <Container>
                <div className="my-5">
                    <h1 className="fw-bold mb-5">Please Confirm Your Order</h1>
                    <Row className="d-flex justify-content-between align-content-center" >
                        <Card style={{ width: '30rem' }} className="h-100 w-50">
                            <div className="overflow-hidden">
                                <Card.Img variant="top" src={picture} />
                            </div>
                            <Card.Body className="text-start">
                                <Card.Title>{title}</Card.Title>
                                <h5 className="fw-regular">Price:${price}</h5>
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
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <ConfirmOrder service={service}></ConfirmOrder>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default Service;

