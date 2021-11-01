import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'
import Faq from './Faq/Faq';
import OurTeam from './Our Team/OurTeam';

// Code for about section
const About = () => {


    return (
        <div className="about">
            <Container>
                <div className="py-5">
                    <h1 className="fw-bold">About us</h1>
                    <h5> <span className="m-logo fw-bold">VROMON</span> is the worlds best website for travel easily.</h5>
                    <h5>Whether you’re a traveler looking for budget friendly tour package <span className="m-logo fw-bold">VROMON</span> keeps us connected.</h5>
                </div>
                <OurTeam></OurTeam>
                <Faq></Faq>

            </Container>
        </div>
    );
};

export default About;