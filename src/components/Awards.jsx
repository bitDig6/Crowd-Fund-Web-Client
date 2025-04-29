import React from 'react';
import { Slide } from 'react-awesome-reveal';
import awardsAnimation from '../../public/awards.json';
import Lottie from 'lottie-react';

const Awards = () => {
    return (
        <section className='w-11/12 mx-auto my-20 space-y-4'>
            <Slide>
                <h3 className='text-3xl text-center font-bold text-pink-600'>Awards</h3>
            </Slide>
            <Lottie className='w-1/3 lg:w-1/4 mx-auto' animationData={awardsAnimation}></Lottie>
            <p className='text-center font-semibold'>CrowdCube is a vastly recognized crowdfunding platform that we have achieved from our community and partners. Checkout some of our achievements here that we deeply cherish</p>

            <div className='w-4/5 mx-auto lg:my-10 grid grid-cols-1 md:grid-cols-3 gap-4'>

                <div className="card bg-gradient-to-br from-pink-400 to-yellow-300 shadow-xl rounded-xl">
                    <div className="card-body font-poppins">
                        <h3 className='text-xl font-bold text-center'>Best Crowdfunding Platform 2024</h3>
                        <p className='text-center font-semibold'>Awarded by the National Innovative Youth Leadership Award 2022</p>
                    </div>
                </div>

                <div className="card bg-gradient-to-br from-pink-400 to-yellow-300 shadow-xl rounded-xl">
                    <div className="card-body font-poppins">
                        <h3 className='text-xl font-bold text-center'>Excellence In User Experience 2022</h3>
                        <p className='text-center font-semibold'>Top Listed User Experience Website in Bangladesh IT Today Magazine</p>
                    </div>
                </div>

                <div className="card bg-gradient-to-br from-pink-400 to-yellow-300 shadow-xl rounded-xl">
                    <div className="card-body font-poppins">
                        <h3 className='text-xl font-bold text-center'>80+ Successful Campaign Milestone 2025</h3>
                        <p className='text-center font-semibold'>As of 2025, in 10 years in out journey we have successfully completed 80+ campaigns</p>
                    </div>
                </div>


                <div className="card bg-gradient-to-br from-pink-400 to-yellow-300 shadow-xl rounded-xl">
                    <div className="card-body font-poppins">
                        <h3 className='text-xl font-bold text-center'>Top 20 Startup Platforms in 2023</h3>
                        <p className='text-center font-semibold'>Featured in Youth Innovation BD Magazine as one of he top 20 reliable and impactful platforms for young people for supporting their creative projects</p>
                    </div>
                </div>

                <div className="card bg-gradient-to-br from-pink-400 to-yellow-300 shadow-xl rounded-xl">
                    <div className="card-body font-poppins">
                        <h3 className='text-xl font-bold text-center'>National Social Welfare Award 2020</h3>
                        <p className='text-center font-semibold'>Awarded for successful campaigns for donations for various social welfare programs.</p>
                    </div>
                </div>

                <div className="card bg-gradient-to-br from-pink-400 to-yellow-300 shadow-xl rounded-xl">
                    <div className="card-body font-poppins">
                        <h3 className='text-xl font-bold text-center'>Oricon Cultural Award 2018</h3>
                        <p className='text-center font-semibold'>Awarded by the Oricon group for holding a handful of campaigns for creative and impactful Documentaries, Indie Films etc.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;