import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import Lottie from 'lottie-react';
import lottieAnimation from '../../public/lottie.json';

const About = () => {
    return (
        <section className='w-11/12 mx-auto'>
            <Slide>
                <h3 className='text-3xl text-center font-bold text-pink-600 mb-5'>About Us</h3>
            </Slide>
            <h3 className='font-rancho text-5xl text-center font-bold text-pink-600 mb-5'>CrowdCube</h3>
            <div className='font-raleway text-center text-pink-600 text-xl font-bold mb-5'>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <div>Your Reliable Ally</div>
                    <div>For Fundraising</div>
                    <div>Through Crowdfunding</div>                  
                </Fade>
            </div>
            <div className='w-4/5 mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-center items-center lg:p-10'>
                <div className='lg:w-1/2 space-y-3 text-base font-semibold text-justify'>
                    <p>CrowdCube is a reliable and popular platform for raising funds through Crowdfunding. We have a 24/7 customer support system and we are always ready to start your crowdfunding campaign.
                    </p>
                    <p>Contact Us for any Kind of Queries: <span className='text-pink-600 underline underline-offset-2'>+088 179797977</span></p>
                    <p>Also, follow us on Social Media to stay updated with us. We are available at FaceBook, X, and Instagram. Search for 'CrowCube' and you can find our pages.</p>
                </div>
                <Lottie className='lg:w-1/3 mx-auto outline-2 outline-offset-8 border-2 border-pink-400 outline-pink-400' animationData={lottieAnimation}></Lottie>
            </div>
        </section>
    );
};

export default About;