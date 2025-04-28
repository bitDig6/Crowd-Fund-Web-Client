import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const Details = () => {
    const { user } = useContext(AuthContext);
    const loadedDetails = useLoaderData();
    const { addedBy, amount, deadline, description, thumbnail, title, type } = loadedDetails;

    const handleDonation = () => {
        const dateDeadline = new Date(deadline);
        const currentDate = new Date();
        if(dateDeadline < currentDate){
            toast.error('Deadline Finished. You cannot donate to this campaign anymore');
            return;
        }

        const donorName = user.displayName;
        const donorEmail = user.email;

        const newDonation = {
            donorName,
            donorEmail,
            title,
            thumbnail,
            description,
            type,
            deadline,
            amount,
            addedBy
        }

        fetch('https://crowd-fund-web-app-server.vercel.app/donations', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newDonation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Donation Successful!',
                        text: 'You have donated to this campaign successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
            }).catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className='w-4/5 mx-auto my-20'>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center items-center bg-base-100 shadow-2xl border border-gray-200 rounded-2xl px-5 py-10">
                <figure className='w-11/12 mx-auto'>
                    <img
                        className='w-full rounded-xl'
                        src={thumbnail}
                        alt={title} />
                </figure>
                <div className="space-y-3 *:font-semibold">
                    <h2 className='text-xl text-pink-600 lg:text-center'>{title}</h2>
                    <p><span className='text-pink-600'>Campaign Type: </span> {type}</p>
                    <p><span className='text-pink-600'>Description: </span>{description}</p>
                    <p><span className='text-pink-600'>Deadline: </span>{deadline}</p>
                    <p><span className='text-pink-600'>Min. Donation Amount: </span>{amount}</p>
                    <p><span className='text-pink-600'>Campaign Added By: </span>{addedBy}</p>
                    <button onClick={handleDonation} className='btn btn-secondary w-full mt-2'>Donate</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;