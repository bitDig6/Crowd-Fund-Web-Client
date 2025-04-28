import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext);

    const handleAddCampaign = (event) => {
        event.preventDefault();
        const form = event.target;

        const thumb = form.thumb.value;
        const title = form.title.value;
        const type = form.type.value;
        const amount = form.amount.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const name = form.name.value;

        const newCampaign = {
            thumbnail: thumb,
            title,
            type,
            amount,
            description,
            deadline,
            addedBy: name
        };

        fetch('https://crowd-fund-web-app-server.vercel.app/campaigns', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Added Successfully!',
                        text: 'You have added a campaign successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
            })
            .catch(error => {
                toast.error(error.message);
            })

            form.reset();

    }

    return (
        <div className='lg:w-4/5 mx-auto my-20'>
            <div className="card bg-pink-200 w-4/5 lg:w-1/2 mx-auto shadow-2xl">
                <div className="card-body">
                    <h1 className='text-3xl text-center font-bold text-pink-600'>Add A New Campaign</h1>
                    <form onSubmit={handleAddCampaign} className="fieldset relative space-y-2">
                        <label className="fieldset-label text-black">Thumbnail URL</label>
                        <input type="text" name="thumb" className="input w-full" placeholder="Thumbnail URL" required autoComplete='off' />

                        <label className="fieldset-label text-black">Campaign Title</label>
                        <input type="text" name="title" className="input w-full" placeholder="Campaign Title" required autoComplete='off' />

                        <label className="fieldset-label text-black">Campaign Type</label>
                        <select name="type" defaultValue="Select a type" className="select w-full">
                            <option disabled={true}>Select a type</option>
                            <option>StartUp</option>
                            <option>Business</option>
                            <option>Creative Idea</option>
                            <option>Relief Support</option>
                            <option>Health Support</option>
                            <option>IT and Development</option>
                            <option>Food Support</option>
                            <option>Social Welfare</option>
                            <option>Donations</option>
                            <option>Education Support</option>
                            <option>Entrepreneurship</option>
                            <option>Game Development</option>
                            <option>Entertainment Industry</option>
                        </select>

                        <label className="fieldset-label text-black">Description</label>
                        <input type="text" name="description" className="input w-full" placeholder="Description" required autoComplete='off' />

                        <label className="fieldset-label text-black">Minimum Donation Amount</label>
                        <input type="number" name="amount" className="input w-full" placeholder="Minimum Donation Amount" required autoComplete='off' />

                        <label className="fieldset-label text-black">Deadline</label>
                        <input type="date" name="deadline" className="input w-full" required autoComplete='off' />

                        <label className="fieldset-label text-black">Email</label>
                        <input type="email" name="email" className="input w-full" disabled defaultValue={user.email} />

                        <label className="fieldset-label text-black">Name</label>
                        <input type="text" name="name" className="input w-full" disabled defaultValue={user.displayName} />

                        <button className="btn btn-secondary mt-4">Add</button>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddNewCampaign;