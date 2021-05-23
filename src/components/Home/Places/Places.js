import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

const Places = () => {
    const [places, setPlaces] = useState();
    useEffect(() => {
        fetch('https://tourist-hub.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Places must visit</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We have listed some places you must visit.</p>
        </div>
                <div className="flex flex-wrap -m-4">
                    {
                        places && places.map(place =><Place key={place._id} place={place}></Place> )
                    }

                </div>
            </div>
        </section>
    );
};

export default Places;