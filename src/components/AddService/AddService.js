import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const service = {
            name: data.name,
            description: data.description,
            location: data.location,
            cost: data.cost,
            image: data.image[0].name
        }

        fetch('http://localhost:5055/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service),
        })
    }

    return (
        <section className="bg-gray-50 text-gray-800">
            <div className="grid grid-cols-5 gap-0 min-h-screen w-full">
                <div className="row-span-1">
                    <Sidebar />
                </div>

                <div className="col-span-4">
                    <div className="bg-gray-900 h-full shadow-lg">
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
                        <div className="overflow-y-auto overflow-x-hidden flex-grow bg-white">
                            <div className="col-lg-7 col-md-5 mx-auto rounded">
                                <div className="card hover-top-shadow hover-top-shadow-lg border-0 card-form"><img className="card-img-top card-img-curve" src="assets/img/gallery/photo-2.png" alt="" />
                                    <div className="card-body p-4 pt-5">
                                        <form className="container" onSubmit={handleSubmit(onSubmit)}>
                                            <h3>Add Service</h3>
                                            <div className="row mb-4 d-flex justify-content-between">
                                                <div className="col w-50">
                                                    <label for="name" className="form-label">Service Name</label>
                                                    <input type="text" {...register("name")} className="form-control" id="name" placeholder="Service Name" />
                                                </div>
                                                <div className="col w-50">
                                                    <label for="description" className="form-label">Description</label>
                                                    <input type="text" {...register("description")} className="form-control" id="description" placeholder="Description" />
                                                </div>
                                            </div>
                                            <div className="row mb-4 d-flex justify-content-between">
                                                <div className="col w-50">
                                                    <label for="location" className="form-label">Location</label>
                                                    <input type="text" {...register("location")} className="form-control" id="location" placeholder="Location" />
                                                </div>
                                                <div className="col w-50">
                                                    <label for="cost" {...register("cost")} className="form-label">Cost</label>
                                                    <input type="number" {...register("cost", { min: 0, max: 9999 })} className="form-control" id="cost" placeholder="Cost" />
                                                </div>
                                            </div>
                                            <div className="row mb-4 d-flex justify-content-between">
                                                <div className="col w-50">
                                                    <div>
                                                        <label className="form-label">Add Service Image</label>
                                                    </div>
                                                    <div>
                                                        <label className="form-label form inline-block bg-indigo-600 text-white p-2 rounded-md cursor-pointer" for="image"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</label>
                                                        <input type="file" {...register("image")} className="form-control" id="image" hidden />
                                                    </div>
                                                </div>

                                                <div className="col w-50">
                                                    <button className="btn btn-block btn-success text-white" type="submit">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default AddService;