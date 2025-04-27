import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const UpdateCampaign = () => {
    const loadedCampaign = useLoaderData();
    const { _id, addedBy, amount, deadline, description, thumbnail, title, type } = loadedCampaign;
    const { user } = useContext(AuthContext);

    const handleUpdateCampaign = (event) => {
        event.preventDefault();
        const form = event.target;

        const thumbnail = form.thumb.value;
        const title = form.title.value;
        const description = form.description.value;
        const type = form.type.value;
        const deadline = form.deadline.value;
        const amount = form.amount.value;
        const addedBy = form.addedBy.value
        const updatedCampaign = { thumbnail, title, description, type, deadline, amount, addedBy };

        Swal.fire({
            title: "Update this campaign?",
            text: "Update your campaign data",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://crowd-fund-web-app-server.vercel.app/campaigns/${_id}`, {
                    method: 'PUT',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updatedCampaign)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated Successfully!",
                                text: "Your campaign has been updated.",
                                icon: "success"
                            });
                        }
                    }).catch(error => {
                        toast(error.message);
                    })
            }
        })
    }

    return (
        <div className='lg:w-4/5 mx-auto my-20'>
            <div className="card bg-pink-200 w-4/5 lg:w-1/2 mx-auto shadow-2xl">
                <div className="card-body">
                    <h1 className='text-3xl text-center font-bold text-pink-600'>Add New Campaign</h1>
                    <form onSubmit={handleUpdateCampaign} className="fieldset relative space-y-2">
                        <label className="fieldset-label text-black">Thumbnail URL</label>
                        <input type="text" name="thumb" defaultValue={thumbnail} className="input w-full" placeholder="Thumbnail URL" required autoComplete='off' />

                        <label className="fieldset-label text-black">Campaign Title</label>
                        <input type="text" name="title" defaultValue={title} className="input w-full" placeholder="Campaign Title" required autoComplete='off' />

                        <label className="fieldset-label text-black">Campaign Type</label>
                        <select name="type" defaultValue={type} className="select w-full">
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
                        </select>

                        <label className="fieldset-label text-black">Description</label>
                        <input type="text" name="description" defaultValue={description} className="input w-full" placeholder="Description" required autoComplete='off' />

                        <label className="fieldset-label text-black">Minimum Donation Amount</label>
                        <input type="number" name="amount" defaultValue={amount} className="input w-full" placeholder="Minimum Donation Amount" required autoComplete='off' />

                        <label className="fieldset-label text-black">Deadline</label>
                        <input type="date" name="deadline" defaultValue={deadline} className="input w-full" required autoComplete='off' />

                        <label className="fieldset-label text-black">Email</label>
                        <input type="email" name="email" className="input w-full" disabled defaultValue={user.email} />

                        <label className="fieldset-label text-black">Name</label>
                        <input type="text" name="addedBy" className="input w-full" disabled defaultValue={addedBy} />

                        <button className="btn btn-secondary mt-4">Add</button>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateCampaign;