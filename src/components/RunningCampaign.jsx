import React from 'react';
import { Link } from 'react-router';

const RunningCampaign = ({ campaign }) => {
    const {_id, title, description, image, deadline} = campaign;


    return (
        <div className="card bg-gradient-to-br from-pink-400 to-yellow-300 shadow- rounded-xl">
            <figure className="w-11/12 mx-auto px-5 pt-10">
                <img
                    src={image}
                    alt="campaign-image"
                    className="w-full h-52 rounded-xl" />
            </figure>
            <div className="card-body font-poppins">
                <h2 className="text-xl  font-bold">{title}</h2>
                <p className='font-semibold text-blue-700'>{description}</p>
                <p className='font-semibold text-blue-700'>Deadline: {deadline}</p>
                <div className="mt-3 flex flex-col justify-center card-actions">
                    <Link to={`/runningCampaigns/${_id}`} className="w-full btn btn-secondary rounded-full">See More</Link>
                </div>
            </div>
        </div>
    );
};

export default RunningCampaign;