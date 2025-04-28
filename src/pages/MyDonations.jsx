import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import MyDonation from '../components/MyDonation';

const MyDonations = () => {
    const loadedDonations = useLoaderData();
    const { user } = useContext(AuthContext);

    const myDonations = loadedDonations.filter( loadedDonation => loadedDonation.donorEmail === user.email );

    return (
        <div className='w-4/5 mx-auto my-12 min-h-screen'>
            <h1 className='text-4xl font-bold text-center text-pink-600 mb-10'>Donations Made by {user.displayName}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2'>
                {
                    myDonations.map(myDonation => <MyDonation key={myDonation._id} myDonation={myDonation}></MyDonation> )
                }
            </div>
        </div>
    );
};

export default MyDonations;