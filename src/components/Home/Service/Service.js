import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { name, description, location, cost, image } = props.service.service;
    const history = useHistory();

    const handleBook = (id) => {
        history.push(`/user/book/${id}`);
    }

    return (
        <div onClick={ () => handleBook( props.service._id) } className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-green-100 antialiased cursor-pointer">
            <div className="w-full">
                <img className="object-cover" src={image} alt={name} />
            </div>
            <div className="px-6 py-1 text-center font-sans">
                <div className="font-bold text-xl my-2">{name}</div>
                <p className="text-grey-darker text-base font-semibold">{description}</p>
            </div>
            <div className="flex flex-row px-6 py-1 justify-between">
                <div className="flex-col p-0 m-0 left-0">
                    <p className="font-bold">{location}</p>
                </div>
                <div className="flex-col p-0 m-0 right-0">
                    <p className="font-bold">{cost}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;