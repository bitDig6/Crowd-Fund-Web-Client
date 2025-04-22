import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='lg:w-4/5 mx-auto my-20'>
            <div className="card bg-pink-200 w-4/5 lg:w-1/2 mx-auto shadow-2xl">
                <div className="card-body">
                    <h1 className='text-3xl text-center font-bold text-pink-600'>Add New Campaign</h1>
                    <form className="fieldset relative space-y-2">
                        <label className="fieldset-label text-black">Thumbnail URL</label>
                        <input type="text"  className="input w-full" placeholder="Thumbnail URL" required autoComplete='off' />

                        <label className="fieldset-label text-black">Campaign Title</label>
                        <input type="text"  className="input w-full" placeholder="Campaign Title" required autoComplete='off' />

                        {/* campaign types */}

                        <label className="fieldset-label text-black">Description</label>
                        <input type="text"  className="input w-full" placeholder="Description" required autoComplete='off' />

                        <label className="fieldset-label text-black">Minimum Donation Amount</label>
                        <input type="number"  className="input w-full" placeholder="Minimum Donation Amount" required autoComplete='off' />

                        <label className="fieldset-label text-black">Deadline</label>
                        <input type="date" name="" className="input w-full" required autoComplete='off' />

                        <label className="fieldset-label text-black">Email</label>
                        <input type="email" name="" className="input w-full"   disabled defaultValue={user.email}/>

                        <label className="fieldset-label text-black">Name</label>
                        <input type="text" name="" className="input w-full" disabled defaultValue={user.displayName} />

                        <button className="btn btn-secondary mt-4">Add</button>
                    </form>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default AddNewCampaign;