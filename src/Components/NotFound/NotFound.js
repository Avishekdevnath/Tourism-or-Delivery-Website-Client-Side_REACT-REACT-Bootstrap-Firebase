import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

// Code for Not found
const NotFound = () => {
    return (
        <div className="" >
            <img className="img-fluid " src="https://i.ibb.co/k2GVxqg/404.png" alt="" />
            <br />
            <Link to='/home'><Button className="btn btn-primary my-5">Back to home</Button></Link>

        </div>
    );
};

export default NotFound;