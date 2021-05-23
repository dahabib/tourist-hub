import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Booking from '../Booking/Booking';
import Sidebar from '../Sidebar/Sidebar';

const Bookings = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState(null);

    useEffect(() => {
        fetch(`https://tourist-hub.herokuapp.com/bookingsByUser?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [loggedInUser.email])
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
                                <h2>Your Bookings</h2>
                                <br />
                                <div className="card-body p-4 pt-5">
                                    <div class="container px-5 py-10 mx-auto">
                                        <div class="flex flex-wrap -m-4">
                                            {
                                                bookings && bookings.map(booking => <Booking booking={booking}></Booking>)
                                            }

                                        </div>
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
export default Bookings;