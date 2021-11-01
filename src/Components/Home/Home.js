import React from 'react';
import './Home.css'
import Welcome from './Banner/Welcome';
import TopServices from './TopServices/TopServices';
import HappyClients from './HappyClients/HappyClients';
import Faq from '../About/Faq/Faq';

// Code for home page
const Home = () => {
    return (
        <div>
            <Welcome></Welcome>
            <TopServices></TopServices>
            <Faq></Faq>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;