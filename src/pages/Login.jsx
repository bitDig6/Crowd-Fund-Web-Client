import React, { createRef, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { signInUser, signInUserWithGoogle, setUser } = useContext(AuthContext);
    const [seePassword, setSeePassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const emailRef = createRef();
    const passwordRef = createRef();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInUser(email, password)
            .then(res => {
                setUser(res.user);
                Swal.fire({
                    title: 'Login Successful!',
                    text: 'You have logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                if(location.state){
                    navigate(location.state);
                }else{
                    navigate('/');
                }
            }).catch(error => {
                setError(error.message);
                toast.error(error.message);
            })
        form.reset();
    }

    const handleSignInWithGoogle = () => {
        signInUserWithGoogle()
            .then(res => {
                setUser(res.user);
                Swal.fire({
                    title: 'Login Successful!',
                    text: 'You have logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })

            }).catch(error => {
                setError(error.message);
                toast.error(error.message);
            })
    }

    return (
        <div className='lg:w-4/5 mx-auto my-20'>
            <div className="card bg-pink-200 w-4/5 lg:w-1/2 mx-auto shadow-2xl">
                <div className="card-body">
                    <h1 className='text-3xl text-center font-bold text-pink-600'>Login</h1>
                    <form onSubmit={handleLogin} className="fieldset relative space-y-2">
                        <label className="fieldset-label text-black">Email</label>
                        <input type="email" ref={emailRef} className="input w-full" placeholder="Email" required autoComplete='off' />

                        <label className="fieldset-label text-black">Password</label>
                        <input type={
                            seePassword ? "text" : "password"
                        } ref={passwordRef} className="input w-full" placeholder="Password" required autoComplete='off' />

                        {
                            error && <p className='text-red-500'>{error}</p>
                        }

                        <button className="btn btn-secondary mt-4">Login</button>
                    </form>
                    {
                        seePassword ?
                            <FaEyeSlash onClick={() => setSeePassword(!seePassword)} className='absolute top-[12.75rem] right-10 z-20 cursor-pointer'></FaEyeSlash>
                            : <FaEye onClick={() => setSeePassword(!seePassword)} className='absolute top-[12.75rem] right-10 z-20 cursor-pointer'></FaEye>
                    }
                    <p className='text-black '>Don't have an account? <Link className='hover:text-blue-700 underline underline-offset-4' to='/register'>Register Now!</Link></p>

                    <div className='divider divider-neutral text-black font-semibold'>OR</div>
                    <button onClick={handleSignInWithGoogle} className='btn btn-secondary'><FaGoogle></FaGoogle>Login with Google</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;