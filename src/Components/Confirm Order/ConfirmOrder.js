import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ConfirmOrder.css'
const ConfirmOrder = ({ service }) => {
    const history = useHistory();
    const { user } = useAuth();
    const { price } = service;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const doc = { data, status: 'pending', user, service };
        fetch('http://localhost:5000/allOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Confirmed.')
                    history.push('/myOrders')
                    reset();
                }
            })

    }




    return (

        <Card style={{ width: '30rem' }} className="d-flex justify-content-center align-content-center h-100 w-30">
            <h2 className="my-3">Confirm Order</h2>
            <Card.Body className="text-center">

                <h3 className="service-cart-price">price: <span>${price}</span></h3>
                <h3 className="fw-bold pt-3">{user.displayName}</h3>
                <h5 className="fw-bold">{user.email}</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="service-input">
                        <input {...register("address", { required: true, maxLength: 20 })} placeholder="Your address" />
                        <input type="number" {...register("phone")} placeholder="Your phone number" />
                    </div>
                    <input className="service-form-submit bg-success" type="submit" value="Confirm Booking" />
                </form>
            </Card.Body>
        </Card>
    );
};

export default ConfirmOrder;