import React from 'react';

const Review = (props) => {
    console.log(props);
    const {name, description, organization, designation, photo} = props.review;
    return (
        <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={photo} />
                <p class="leading-relaxed">{description}</p>
                <span class="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
                <p class="text-gray-500">{designation}, {organization}</p>
            </div>
        </div>
    );
};

export default Review;