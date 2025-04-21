import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.png';
import userImg from '../assets/user.png';
import { AuthContext } from '../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
    const { user, setUser, signOutUser } = useContext(AuthContext);

    const navigationLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">All Campaign</NavLink></li>
        <li><NavLink to="/">Add New Campaign</NavLink></li>
        <li><NavLink to="/">My Campaign</NavLink></li>
        <li><NavLink to="/">My Donations</NavLink></li>
    </>

    const handleLogOut = () => {
        signOutUser()
            .then( () => {
                
                setUser(null);
            }).catch(error => {
                toast(error);
            })
    }

    return (
        <div className="navbar bg-pink-500 lg:px-10 lg:pt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navigationLinks}
                    </ul>
                </div>
                <Link to='/' className="ml-2 lg:ml-0 flex gap-2 items-center">
                    <img className='w-12' src={logoImg} alt="website-logo" />
                    <span className='font-rancho lg:text-3xl font-bold'>CrowdCube</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 *:font-semibold *:hover:underline  *:hover:underline-offset-4">
                    {navigationLinks}
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex">
                {
                    user?.displayName ?                         
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="avatar rounded-full border-2 border-violet-600 cursor-pointer">
                                <div className="w-12 rounded-xl">
                                    <img className='w-full rounded-full' src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li className='mt-1 text-center font-semibold'>
                                    {user.displayName}
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
                                </li>
                            </ul>
                        </div>
                        :
                        <>
                            <Link to='/login' className='btn sm:btn-xs md:btn-md mr-3'>
                                Login
                            </Link>

                            <Link to='/register' className='btn sm:btn-xs md:btn-md'>
                                Register
                            </Link>
                        </>
                }
            </div>

            <div className='navbar-end lg:hidden'>
                <div className='dropdown dropdown-bottom dropdown-end'>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle m-1 ">
                        <img className='w-10' src={userImg} alt="user-icon" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                            user?
                                user?.displayName
                                : <>
                                    <li>
                                        <Link to='/login' className='btn sm:btn-xs md:btn-md'>
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/register' className='btn sm:btn-xs md:btn-md'>
                                            Register
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;