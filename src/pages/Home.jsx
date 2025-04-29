import Banner from '../components/Banner';
import RunningCampaign from '../components/RunningCampaign';
import About from '../components/About';
import Awards from '../components/Awards';
import { useLoaderData } from 'react-router';
import { Slide } from 'react-awesome-reveal';
import Toggle from '../components/Toggle';

const Home = () => {
    const runningCampaigns = useLoaderData();

    return (
        <div className='min-h-dvh'>
            <Banner></Banner>
            <Toggle></Toggle>
            <section className='w-11/12 mx-auto my-20'>
                <Slide>
                    <h3 className='text-4xl font-bold text-center text-pink-500 mb-10'>Our Running Campaigns</h3>
                </Slide>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2'>
                    {
                        runningCampaigns.map(runningCampaign => <RunningCampaign key={runningCampaign._id} runningCampaign={runningCampaign}></RunningCampaign>)
                    }
                </div>
            </section>
            <About></About>
            <Awards></Awards>
        </div>
    );
};

export default Home;