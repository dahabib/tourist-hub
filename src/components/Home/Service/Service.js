import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { name, description, location, cost, image } = props.service.service;
    const history = useHistory();

    const handleBook = (id) => {
        history.push(`/user/book/${id}`);
    }

    return (
        <div onClick={() => handleBook(props.service._id)} className="grid grid-rows-2 w-full rounded overflow-hidden shadow-lg bg-green-100 antialiased cursor-pointer">
            <div className=" bg-black">
                <img className="object-cover object-center" src={image} alt={name} />
            </div>
            <div className="grid auto-rows-auto">
                <div className="px-6 text-center font-sans">
                    <div className="font-bold text-xl my-2">{name}</div>
                    <p className="text-grey-darker text-base font-semibold">{description}</p>
                </div>
                <div className="flex flex-row px-6 justify-between">
                    <div className="flex-col p-0 m-0">
                        <p className="font-bold">{location}</p>
                    </div>
                    <div className="flex-col p-0 m-0 ">
                        <p className="font-bold">{cost}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;