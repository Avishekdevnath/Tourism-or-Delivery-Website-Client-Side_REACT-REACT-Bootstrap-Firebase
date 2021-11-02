import React, { useEffect, useState } from 'react';
import './Home.css'
import Welcome from './Banner/Welcome';
import TopServices from './TopServices/TopServices';
import HappyClients from './HappyClients/HappyClients';
import Faq from '../About/Faq/Faq';
import Loader from "react-loader-spinner";
import useData from '../../hooks/useData';
import NewServices from './NewServices/NewServices';

// Code for home page
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [services] = useData();

    useEffect(() => {
        if (services.length > 0) {
            setLoading(false);
        }

    }, [services])

    return (

        <div>
            {loading ?
                <div className="h-100 w-100 my-5 py-5">
                    <Loader
                        type="Audio"
                        color="#00BFFF"
                        height={500}
                        width={500}
                    />
                </div> :

                <>
                    <Welcome></Welcome>
                    <TopServices ></TopServices>
                    <NewServices></NewServices>
                    <Faq></Faq>
                    <HappyClients></HappyClients>
                </>
            }

        </div>
    );
};

export default Home;