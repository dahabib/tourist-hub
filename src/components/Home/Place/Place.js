import React from 'react';

const Place = () => {
    return (
        <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
            </div>
        </div>
    );
};

export default Place;