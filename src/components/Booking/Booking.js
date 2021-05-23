import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Booking = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { tripId } = props.booking;
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch(`https://tourist-hub.herokuapp.com/bookingsById?id=${tripId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div class="lg:w-1/3 sm:w-1/2 p-4 bg-indigo-600">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full object-cover object-center" src="" />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">region</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Namee</h1>
                    <p class="leading-relaxed">description</p>
                </div>
            </div>
        </div>

    )
};

export default Booking;