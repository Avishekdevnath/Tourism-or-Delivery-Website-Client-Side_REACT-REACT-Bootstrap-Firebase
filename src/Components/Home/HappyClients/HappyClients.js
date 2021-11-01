import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './HappyClients.css'
// Code For Happy Clients Section
const HappyClients = () => {
    // const star = <FontAwesomeIcon icon={['fas', 'faStar']} className="" />;
    const star = <FontAwesomeIcon icon={faStar} className="" />;
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('./API/HappyClients.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div className="container">
            <h1 className="my-5 fw-bold">Our Happy Clients</h1>
            <Row xs={1} md={3} className="g-4 mb-5">
                {
                    clients.map(client => {
                        const { picture, name, description, id } = client;
                        return (<Col key={id}>
                            <Card className="h-100">

                                <Card.Img variant="top" src={picture} className="rounded-circle mx-auto mt-3 h-img" />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <div>
                                        <i className="i-happy">{star}</i>
                                        <i className="i-happy">{star}</i>
                                        <i className="i-happy">{star}</i>
                                        <i className="i-happy">{star}</i>
                                        <i className="i-happy">{star}</i>
                                    </div>
                                    <Card.Text>{description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    })
                }
            </Row>
        </div>
    );
};

export default HappyClients;