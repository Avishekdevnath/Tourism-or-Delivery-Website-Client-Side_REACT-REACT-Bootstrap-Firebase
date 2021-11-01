import { useEffect, useState } from "react"

// Code for useServices
const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./API/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return { services, setServices };
}

export default useServices;