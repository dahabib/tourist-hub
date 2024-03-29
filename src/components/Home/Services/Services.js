import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('https://tourist-hub.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <section id="#services" className="text-gray-600 body-font bg-green-400 py-10">
            <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Available Tours</h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-28 h-1 rounded-full bg-purple-500 inline-flex"></div>
                </div>
            </div>
            <div className="container px-5 py-18 mx-auto">
                <div className="flex flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-x-6 justify-between">
                    {
                        services && services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;