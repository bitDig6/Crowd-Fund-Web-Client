import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const loadedCampaigns = useLoaderData();

    const myAddedCampaigns = loadedCampaigns.filter(loadedCampaign => loadedCampaign.addedBy === user.displayName);
    const [myCampaigns, setMyCampaigns] = useState(myAddedCampaigns);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure to delete this campaign?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(result => {
            if(result.isConfirmed){
                fetch(`https://crowd-fund-web-app-server.vercel.app/campaigns/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then( data => {
                        if(data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                        const newMyCampaigns = myCampaigns.filter(myCampaign => myCampaign._id !== id );
                        setMyCampaigns(newMyCampaigns);
                    }).catch(error => {
                        toast.error(error.message);
                    })
            }
          })
    }

    return (
        <div className='min-h-screen my-12'>
            <h3 className='text-4xl font-bold text-center text-pink-600 mb-5'>Campaigns Added By {user.displayName}</h3>
            <p className='text-xl font-semibold text-center mb-10'>Number of Campaigns: <span className='text-blue-600'>{myCampaigns.length}</span></p>

            <div className="w-4/5 mx-auto overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Added By</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCampaigns.map((myCampaign, idx) => <tr key={myCampaign._id}>
                                <th>{idx + 1}</th>
                                <td>{myCampaign.title}</td>
                                <td>{myCampaign.deadline}</td>
                                <td>{myCampaign.addedBy}</td>
                                <td>{myCampaign.type}</td>
                                <td>                                    
                                    <button onClick={() => handleDelete(myCampaign._id)} className='btn btn-sm md:btn-md btn-error mr-3'>Delete</button> 
                                    <Link to={`/updateCampaign/${myCampaign._id}`}  className='btn btn-sm md:btn-md btn-info mr-3'>Update</Link>                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyCampaign;