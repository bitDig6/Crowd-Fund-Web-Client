import React, { useState } from 'react';
import Banner from '../components/Banner';
import RunningCampaign from '../components/RunningCampaign';
import About from '../components/About';
import Awards from '../components/Awards';
import { useLoaderData } from 'react-router';

const Home = () => {
    const loadedCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadedCampaigns);


    return (
        <div className='min-h-dvh'>
            <Banner></Banner>
            <section className='w-11/12 mx-auto my-20'>
                <h3 className='text-4xl font-bold text-center text-pink-500 mb-10'>Our Running Campaigns</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2'>
                    {
                        campaigns.map(campaign => <RunningCampaign
                            key={campaign._id}
                            campaign={campaign}>
                        </RunningCampaign>)
                    }
                </div>
            </section>
            <About></About>
            <Awards></Awards>
        </div>
    );
};

export default Home;