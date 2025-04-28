import React from 'react';

const MyDonation = ({ myDonation }) => {
    const { title, thumbnail, description, type, deadline, amount, addedBy } = myDonation;

    return (
        <div className="card bg-gradient-to-br from-pink-400 to-yellow-300 shadow- rounded-xl">
            <figure className="w-11/12 mx-auto px-5 pt-10">
                <img
                    src={thumbnail}
                    alt="campaign-image"
                    className="w-full h-52 rounded-xl" />
            </figure>
            <div className="card-body font-poppins">
                <h2 className="text-xl  font-bold">{title}</h2>
                <p className='font-semibold text-blue-700'>{description}</p>
                <p className='font-semibold text-blue-700'>Campaign Type: {type}</p>
                <p className='font-semibold text-blue-700'>Min. Donation Amount: {amount}</p>
                <p className='font-semibold text-blue-700'>Deadline: {deadline}</p>
                <p className='font-semibold text-blue-700'>Campaign Added By: {addedBy}</p>
            </div>
        </div>
    );
};

export default MyDonation;