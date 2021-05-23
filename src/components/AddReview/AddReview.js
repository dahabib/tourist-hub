import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const reviewInfo = {
            name: data.name,
            email: data.email,
            organization: data.organization,
            designation: data.designation,
            description: data.description, 
            photo: loggedInUser.photo
        }

        fetch('https://tourist-hub.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewInfo),
        })
            .then(response => response.json())
            .then(data => {
                alert('Review added successfully');
            })
            .catch(error => {
                console.error(error)
            })
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
                                    <form className="container" onSubmit={handleSubmit(onSubmit)}>
                                        <h3>Add Review</h3>
                                        <div className="row mb-4 d-flex justify-content-between">
                                            <div className="col w-50">
                                                <input type="text" {...register("name")} value={loggedInUser.name} className="form-control" id="name" placeholder="Name" />
                                            </div>
                                            <div className="col w-50">
                                                <input type="text" {...register("email")} value={loggedInUser.email} className="form-control" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="row mb-4 d-flex justify-content-between">
                                            <div className="col w-50">
                                                <input type="text" {...register("organization")} className="form-control" id="organization" placeholder="Organization" />
                                            </div>
                                            <div className="col w-50">
                                                <input type="text" {...register("designation")} className="form-control" id="designation" placeholder="designation" />
                                            </div>
                                        </div>

                                        <div className="row mb-4 d-flex justify-content-between">
                                            <div className="col w-100">
                                                <input type="textarea" {...register("description")} className="form-control" id="description" placeholder="Describe us" />
                                            </div>
                                        </div>
                                        <button className="btn btn-block btn-success text-white" type="submit">Submit Review</button>
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

export default AddReview;