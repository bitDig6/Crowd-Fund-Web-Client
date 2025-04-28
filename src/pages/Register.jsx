import React, { createRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
const Register = () => {
    const { setUser, createUser, signInUserWithGoogle, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const [seePassword, setSeePassword] = useState(false);
    const[error, setError] = useState(null);

    const nameRef = createRef();
    const photoRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = nameRef.current.value;
        const photo = photoRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let passReg = /^(?=.*[A-Z])(?=.*[a-z])[^\s]{6,}$/
;
        if (!passReg.test(password)) {
            setError('Password should be at least 6 characters, at least one uppercase letter, at least one lowercase letter and, no white spaces');
            toast('Password should be at least 6 characters, at least one uppercase letter, at least one lowercase letter, and no white spaces');
            return;
        }
        
        createUser(email, password)
            .then((res) => {  
                const user = res.user;
                
                const userNewInfo = {
                    displayName: name,
                    photoURL: photo
                };
                user.displayName = name,
                user.photoURL = photo;
                setUser(user);
                updateUserProfile(userNewInfo)
                    .then(() => {
                        Swal.fire({
                            title: 'Register Successful!',
                            text: 'You have registered successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          });
                          navigate('/');
                    }).catch(error => {
                        setError(error.message);
                        toast.error(error.message)
                    })
            }).catch(error => {
                setError(error.message);
                toast.error(error.message);
            } )
            form.reset();
    }

    const handleRegisterWithGoogle = () => {
        signInUserWithGoogle()
            .then(() => {
                Swal.fire({
                    title: 'Register Successful!',
                    text: 'You have registered successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                  navigate('/');
            }).catch(error => {
                setError(error);
            })

    }

    return (
        <div className='lg:w-4/5 mx-auto my-20'>
            <div className="card bg-pink-200 w-4/5 lg:w-1/2 mx-auto shadow-2xl">
                <div className="card-body">
                    <h1 className='text-3xl text-center font-bold text-pink-600'>Register Now!</h1>
                    <form onSubmit={handleRegister} className="fieldset relative space-y-2">
                        <label className="fieldset-label text-black">Name</label>
                        <input type="text" ref={nameRef} className="input w-full" placeholder="Name" required autoComplete='off' />

                        <label className="fieldset-label text-black">Photo URL</label>
                        <input type="text" ref={photoRef} className="input w-full" placeholder="Photo URL" required autoComplete='off' />

                        <label className="fieldset-label text-black">Email</label>
                        <input type="email" ref={emailRef} className="input w-full" placeholder="Email" required autoComplete='off' />

                        <label className="fieldset-label text-black">Password</label>
                        <input type={
                            seePassword ? "text" : "password"
                        } ref={passwordRef} className="input w-full" placeholder="Password" required autoComplete='off' />
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }

                        <button className="btn btn-secondary mt-4">Register</button>
                    </form>
                    {
                        seePassword ?
                        <FaEyeSlash onClick={() => setSeePassword(!seePassword)} className='absolute top-[23.5rem] right-16 z-20 cursor-pointer'></FaEyeSlash>
                        : <FaEye onClick={() => setSeePassword(!seePassword)} className='absolute top-[23.5rem] right-16 z-20 cursor-pointer'></FaEye>   
                    }
                    <p className='text-black '>Already have an account? <Link className='hover:text-blue-700 underline underline-offset-4' to='/login'>Login Now!</Link></p>

                    <div className='divider divider-neutral text-black font-semibold'>OR</div>
                    <button onClick={handleRegisterWithGoogle} className='btn btn-secondary'><FaGoogle></FaGoogle> Register with Google</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;