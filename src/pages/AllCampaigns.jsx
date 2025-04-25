import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllCampaigns = () => {
    const loadedCampaigns = useLoaderData();

    return (
        <div className='my-12 min-h-screen'>
            <h2 className='text-4xl font-bold text-center text-pink-500 mb-10'>All Campaigns</h2>

            <div className="w-4/5 mx-auto overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Added By</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {/* table body */}
                    <tbody>
                        {
                            loadedCampaigns.map((loadedCampaign, idx) => <tr key={loadedCampaign._id}>
                                <th>{idx + 1}</th>
                                <td>{loadedCampaign.title}</td>
                                <td>{loadedCampaign.deadline}</td>
                                <td>{loadedCampaign.addedBy}</td>
                                {/* <td></td> */}
                                <td>
                                    <Link to={`/campaigns/${loadedCampaign._id}`} className='btn btn-sm md:btn-md btn-primary'>
                                        See More
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaigns;