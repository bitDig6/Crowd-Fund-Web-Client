import React from 'react';
import logoImg from '../assets/logo.png';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-pink-500 text-base-content p-10">
            <aside>
                <div className='space-y-4'>
                    <Link to='/' className="flex gap-2 justify-center items-center">
                        <img className='w-12' src={logoImg} alt="website-logo" />
                        <span className='font-rancho text-3xl font-bold'>CrowdCube</span>
                    </Link>
                    <p className='font-raleway italic font-semibold'>Paving Ways For Fundraising</p>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <aside>
                <p>
                    Follow Us On Social Media
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
        </footer>
    );
};

export default Footer;