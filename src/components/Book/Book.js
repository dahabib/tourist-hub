import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CheckoutForm from '../ProcessPayment/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [trip, setTrip] = useState({});
    const { register, handleSubmit } = useForm();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://tourist-hub.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setTrip(data));
    }, [id])


    const onSubmit = data => {
        const orderDetails = {
            ...loggedInUser,
            tripId: trip._id,
            trip: trip?.service?.name,
            paymentId: "",
            paymentMethod: data.paymentMethod,
            orderedOn: new Date(),
            orderStatus: "Pending"
        };

        fetch('https://tourist-hub.herokuapp.com/bookService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully');
                }
            })
    };
    const handlePaymentSuccess = paymentId => {

        //     const orderDetails = {
        //         ...loggedInUser,
        //         products: booking,
        //         paymentId,
        //         orderedOn: new Date()
        //     };

        //     fetch('https://tourist-hub.herokuapp.com/bookService', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(orderDetails)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data) {
        //                 alert('your order placed successfully');
        //             }
        //         })
        }


        return (
            <section className="bg-gray-50 text-gray-800">
                <div className="grid grid-cols-5 gap-0 min-h-screen w-full">
                    <div className="row-span-1">
                        <Sidebar />
                    </div>

                    <div className="col-span-4">
                        <div className="bg-gray-900 shadow-lg">
                            <div className="flex items-center pl-6 h-20 border-b border-gray-800">
                                <div className="ml-1">
                                    <Link to='/' className="relative flex flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Home</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="overflow-y-auto overflow-x-hidden h-full flex-grow bg-white">
                                <div className="w-full p-6 mx-auto rounded">
                                    <div className="card-body p-4 pt-5">
                                        <form className="w-4/5" onSubmit={handleSubmit(onSubmit)}>
                                            <h3>Book Trip</h3>
                                            <br />
                                            <div className="row mb-4 flex justify-between">
                                                <div className="col w-100">
                                                    <input type="text" {...register("name")} value={loggedInUser.name} className="form-control" id="name" placeholder="Name" />
                                                </div>
                                            </div>

                                            <div className="row mb-4 d-flex justify-content-between">
                                                <div className="col w-100">
                                                    <input type="email" {...register("email")} value={loggedInUser.email} className="form-control" id="email" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="row mb-4 d-flex justify-content-between">
                                                <div className="col w-100">
                                                    <input type="text" {...register("trip")} value={trip && trip?.service?.name} className="form-control" id="trip" placeholder="Trip" />
                                                </div>
                                            </div>

                                            <div className="row d-flex justify-content-between">
                                                <div className="col w-100">
                                                    <p className="">Pay with</p>
                                                </div>
                                            </div>

                                            <div className="row mb-4 d-flex justify-content-between border-green-900">
                                                <div className="col w-100">
                                                    Credit card <input {...register("paymentMethod", { required: true })} type="radio" value="Credit Card" />
                                                    Paypal <input {...register("paymentMethod", { required: true })} name="paymentMethod" type="radio" value=" Paypal" />
                                                </div>
                                            </div>

                                            <div className="row d-flex justify-content-between py-3">
                                                <div className="col w-100">
                                                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                                                </div>
                                            </div>

                                            <div className="row mb-4 d-flex justify-content-between">
                                                <div className="col w-50">
                                                    <p>Your trip cost is: ${trip && trip?.service?.cost} </p>
                                                </div>
                                                <div className="col w-25">
                                                    <button className="btn btn-block btn-success text-white" type="submit">Book Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default Book;