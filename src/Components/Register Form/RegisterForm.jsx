import React, { useContext, useState } from 'react';
import Logo from '../../assets/images/AUTOMOVA_WHITE.png';
import { Input, Ripple, initTE } from "tw-elements";
import { AuthContext } from '../../services/Firebase/AuthProvider';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";

initTE({ Input, Ripple });

const RegisterForm = () => {

    const { signUp, googleSignIn } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");



    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;

        const em = form.em.value;

        const pass = form.pass.value;

        setEmail(em);

        setPassword(pass);

        if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
            setError("Error: Password must be at least 6 characters in length, must contain a capital letter and a special character");
        } else {
            setError("");
            if (email) {
                try {
                    await signUp(email, password);
                    swal({
                        title: "Congratulations!",
                        text: "Registration successful!",
                        icon: "success",
                        button: "Okay",
                    });
                } catch (error) {
                    console.error("Registration error:", error);
                    setError("Registration error: " + error.message);
                }
            }
        }
    }

    return (
        <>
            <div className='mx-4 pt-10'>
                <div className='flex flex-col-reverse lg:flex-row-reverse lg:items-center gap-7 lg:gap-0 w-full'>
                    <div className='lg:flex-1'>
                        <div className='py-8 px-6 shadow-xl w-full md:w-8/12 mx-auto bg-base-100 rounded-md space-y-8 '>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold'>REGISTER</h1>
                                <p className='font-medium text-gray-400'>Have an account in the website ? <Link className='text-[#A60FEC] font-semibold underline' to="/login">Sign in</Link> </p>
                            </div>
                            <div>
                                <form onSubmit={handleRegister} className='space-y-5'>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Name</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="name" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR NAME</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Photo URL</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="photo" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR PHOTO URL</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>E-mail Address</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="email" name="email" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR E-MAIL</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Password</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="password" name="password" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR PASSWORD</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-black py-2 md:py-3 w-full text-white font-bold  rounded">REGISTER</button>
                                    </div>
                                </form>
                            </div>
                            <div className='flex items-center'>
                                <div className='border-2 w-full'></div>
                                <span className='font-medium text-gray-400 w-full text-center'>or Register with</span>
                                <div className='border-2 w-full'></div>
                            </div>
                            <div>
                                <button onClick={googleSignIn} className='flex items-center justify-center gap-3 border-black border-2 py-2.5 w-full rounded-md '>
                                    <FaGoogle></FaGoogle>
                                    <span className='font-bold text-black '>GOOGLE</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-1'>
                        <img className='w-full md:w-10/12 mx-auto' src="https://i.ibb.co/qx0x0gd/ezgif-2-c138207f2b.gif" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;
