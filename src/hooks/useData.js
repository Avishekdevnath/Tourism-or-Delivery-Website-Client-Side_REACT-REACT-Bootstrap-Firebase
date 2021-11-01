import React, { useEffect, useState } from 'react';

const useData = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://gentle-gorge-22589.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services];
};

export default useData;