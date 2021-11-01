import React from 'react';
import './Faq.css';
import faq from '../Faq/images/faq.svg';
import { Accordion } from 'react-bootstrap';

// Code for FAQ Section
const Faq = () => {
    return (
        <div className="container-fluid bg-white py-5">
            <div className="container">
                <h1 className="fw-bold">Frequently Asked Questions</h1>
                <div className="row pt-5 d-flex align-items-center">
                    {/* first - column */}
                    <div className="col-lg-6">
                        <img src={faq} style={{ width: "800px" }} className="img-fluid" alt="" />
                    </div>
                    {/* second - column */}
                    <div className="col-lg-6">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How does your service work?</Accordion.Header>
                                <Accordion.Body>
                                    Its simple!  Just contact us by email or phone.  We will collect some initial information and provide you with a quote.  At that time, we will let you know all your options to book your vacation with VROMON and collect any additional information needed.  That's it!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How much does your service cost?</Accordion.Header>
                                <Accordion.Body>
                                    NOTHING!  Our fees are paid by our commissions through suppliers.  You receive the same price for your vacation when you book with us as you would if you called them yourself.  In many cases, we can find discounts and other promotional offerings that you might not know about.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What services does a travel agent offer?</Accordion.Header>
                                <Accordion.Body>
                                    Travel agents provide information and help consumers make travel arrangements for business and pleasure.  A travel agent, for instance, coordinates a traveler's airline flight, hotel reservation, car rental or tour.  Travel agents offer advice and answer common travel questions such as weather inquiries and conditions, places to see and visit, currency exchange rates, required travel documentation and local customs.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What is the role of the travel agent and how has it changed?</Accordion.Header>
                                <Accordion.Body>
                                    A - Travel agents work hard on behalf of the consumer.  The role of a travel agent is to make a trip - whether for work or pleasure - a stress-free and memorable experience.  Travel agents spend time not only booking tickets and searching for affordable prices, but also personalizing their services for individual clients.  ASTA's (American Society of Travel Agents) motto, "Without a Travel Agent, You're on Your Own", exemplifies the importance and way professional travel agents view their role in today's changing market.

                                    The job of a travel agent has grown and adapted to reflect the changes within the travel industry and the difference in the way people think about travel. ASTA travel agents recognize that consumers today have done their homework and are more knowledgeable about what they want. Clients who turn to an ASTA travel agent desire an in-depth, personal approach and want the advice and expertise of a professional.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header> How has the travel industry changed, and what factors affect travel?</Accordion.Header>
                                <Accordion.Body>
                                    A – Over time, the leisure travel industry has become price driven. Many people today base a large part of their travel buying decisions on cost and convenience. Additionally, more people are booking closer in to their travel dates. Thanks to dramatic discounting across the industry, consumers have been conditioned to wait until the last minute before booking in hopes of securing a deeply discounted package deal. However, increasingly, as personal time is in increasingly short demand, people are once again finding the value of working with a professional travel agent to make their vacation plans.  AND, depending on the type of travel you are interested in, waiting until the last minute does not always get the results of securing a deeply discounted package deal.  This is especially true in the cruise industry where supply and demand will drive the price of certain cruises UP instead of down as the cruise date approaches.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header> Do I Need Travel Insurance?</Accordion.Header>
                                <Accordion.Body>
                                    Travel insurance is available and recommended to protect your travel investment. Many trips, such as tours and cruises, involve non-refundable funds paid months in advance. Travel insurance protects you from losing this investment. Perhaps even more important is the ‘during travel’ coverage and assistance that comes with the top-flight insurance companies we carry.

                                    Trip interruption due to illness or unforeseen circumstances can be very expensive, and medical care abroad is often not covered by domestic insurance plans. Also, an increasing number of countries require proof of medical insurance for travelers entering their country.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Faq;