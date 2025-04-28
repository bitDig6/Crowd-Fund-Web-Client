import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const AllCampaigns = () => {
    const loadedCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadedCampaigns);

    const handleSortAscending = () => {
        let sortedCampaigns = [...campaigns];
        sortedCampaigns = sortedCampaigns.sort( (a, b) => {
            return a.amount - b.amount;
        }  );
        setCampaigns(sortedCampaigns);
    }

    return (
        <div className='my-12 min-h-screen'>
            <div className='w-4/5 mx-auto flex flex-col gap-5 justify-center lg:flex-row lg:justify-between items-center mb-10'>
                <h2 className='text-4xl font-bold text-pink-500'>All Campaigns</h2>
                <div className='flex flex-col items-center gap-2'>
                    <a onClick={handleSortAscending} className='btn btn-info' data-tooltip-id='sort-tooltip' data-tooltip-content='Sort Campaigns in Ascending Order by Minimum Donation Amount'>Sort</a>
                    <Tooltip id='sort-tooltip'></Tooltip>
                    <p className='text-xs'>Note: Hover to see more information</p>
                </div>
            </div>

            <div className="w-4/5 mx-auto overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Min. Donation Amount</th>
                            <th>Added By</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {/* table body */}
                    <tbody>
                        {
                            campaigns.map((campaign, idx) => <tr key={campaign._id}>
                                <th>{idx + 1}</th>
                                <td>{campaign.title}</td>
                                <td>{campaign.deadline}</td>
                                <td>{campaign.amount}</td>
                                <td>{campaign.addedBy}</td>
                                <td>
                                    <Link to={`/campaigns/${campaign._id}`} className='btn btn-sm md:btn-md btn-primary'>
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