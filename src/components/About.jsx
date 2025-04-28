import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <section className='w-11/12 mx-auto'>
            <Slide>
                <h3 className='text-3xl text-center font-bold text-pink-600 mb-5'>About Us</h3>
            </Slide>
            <h3 className='font-rancho text-5xl text-center font-bold text-pink-600 mb-5'>CrowdCube</h3>
            <div className='text-center text-pink-600 text-xl font-semibold'>
            <Fade delay={1e3} cascade damping={1e-1}>
                Your Reliable Ally For Fundraising through Crowdfunding
            </Fade>
            </div>
        </section>
    );
};

export default About;