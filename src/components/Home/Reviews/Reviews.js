import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
        useEffect(() => {
        fetch('https://tourist-hub.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-8">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Reviews</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">What people says about us.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    {
                        reviews && reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;