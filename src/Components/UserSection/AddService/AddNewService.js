import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css'
// id, picture, title, time, rating, price, maxPeople, date, minAge, wifi, pickup, shortDescription, description
const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    reset();
                }
            })
    }
    return (
        <div className="add-service my-5 py-5">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("picture", { required: true, maxLength: 20 })} placeholder="Image url" />
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Service title" />
                <input {...register("time", { required: true, maxLength: 20 })} placeholder="time" />
                <input {...register("rating", { required: true, maxLength: 20 })} placeholder="rating" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("maxPeople", { required: true, maxLength: 20 })} placeholder="maxPeople" />
                <input {...register("date", { required: true, maxLength: 20 })} placeholder="date" />
                <textarea {...register("shortDescription")} placeholder="shortDescription" />
                <textarea {...register("description")} placeholder="description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;