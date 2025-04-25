import React from 'react';
import { useLoaderData } from 'react-router';

const CampaignDetails = () => {
    const loadedDetails = useLoaderData();
    // const details = loadedDetails;
    const {title, image, description, details, category,deadline, location} = loadedDetails;

    return (
        <div className='w-4/5 mx-auto my-20'>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center items-center bg-base-100 shadow-2xl border border-gray-200 rounded-2xl px-5 py-10">
                <figure className='w-11/12 mx-auto'>
                    <img
                        className='w-full rounded-xl'
                        src={image}
                        alt={title} />
                </figure>
                <div className="space-y-3 *:font-semibold">
                    <h2 className='text-xl text-pink-600 lg:text-center'>{title}</h2>
                    <p><span className='text-pink-600'>Description: </span>{description}</p>
                    <p><span className='text-pink-600'>Details: </span>{details}</p>
                    <p><span className='text-pink-600'>Category: </span>{category}</p>
                    <p><span className='text-pink-600'>Deadline: </span>{deadline}</p>
                    <p><span className='text-pink-600'>Location: </span>{location}</p>
                    <button className='btn btn-secondary w-full mt-2'>Donate</button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;