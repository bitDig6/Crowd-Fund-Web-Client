import React from 'react';
import { useLoaderData } from 'react-router';

const CampaignDetails = () => {
    const loadedDetails = useLoaderData();
    // const details = loadedDetails;
    const {title, image, description, details, category,deadline, location} = loadedDetails;

    return (
        <section className='w-11/12 mx-auto my-20'>
            {/* don't know if I should add it */}
            <div className="card lg:card-side bg-base-100 shadow-2xl border border-gray-200 rounded-2xl">
                <figure className='lg:w-1/2'>
                    <img
                        className='w-full object-contain'
                        src={image}
                        alt={title} />
                </figure>
                <div className="p-5 lg:my-20 mx-5 space-y-3">
                    <h2 className="">{title}</h2>
                    <p className=''>{description}</p>
                    <p className=''>{details}</p>
                    <p className=''>{deadline}</p>
                    <p className=''>{category}</p>
                    <p className=''>Location: {location}</p>
                </div>
            </div>


        </section>
    );
};

export default CampaignDetails;