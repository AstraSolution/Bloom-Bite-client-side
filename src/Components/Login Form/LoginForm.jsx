import { useContext, useState } from "react";
import { Input, Ripple, initTE } from "tw-elements";
import { AuthContext } from "../../services/Firebase/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";

initTE({ Input, Ripple });


const LoginForm = () => {


    const { googleSignIn, signIn, TwitterSignIn, FaceBookSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // eslint-disable-next-line no-unused-vars
    const [googleLoginRedirect, setGoogleLoginRedirect] = useState("");

    const handleGoogle = async () => {
        const intendedDestination = location.state?.from || "/";
        setGoogleLoginRedirect(intendedDestination);

        try {
            const result = await googleSignIn();
            console.log(result.user);
            navigate(intendedDestination);
        } catch (error) {
            console.error(error);
        }
    };


    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;

        const em = form.em.value;

        const pass = form.pass.value;

        setEmail(em);

        setPassword(pass);

        if (email && password) {
            signIn(email, password)
                .then(() => {
                    const locationState = location.state;
                    if (locationState && locationState.from) {
                        navigate(locationState.from);
                    } else {
                        navigate("/");
                    }
                    swal({
                        title: "Congratulations!",
                        text: "Login Was Successful!",
                        icon: "success",
                        button: "Okay",
                    });
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    };


    const handleTwitter = async () => {
        try {
            const result = await TwitterSignIn();
            console.log("FacebookSignIn result:", result);

            if (result && result.user) {
                console.log(result.user);
            } else {
                console.error("FacebookSignIn result or user is undefined");
            }
        } catch (error) {
            console.error(error);
        }
    };


    const FacebookSignIn = async () => {
        try {
            const result = await FaceBookSignIn();
            console.log("FacebookSignIn result:", result);

            if (result && result.user) {
                console.log(result.user);
            } else {
                console.error("FacebookSignIn result or user is undefined");
            }
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <div className='mx-4'>
                <div className='flex flex-col-reverse lg:flex-row lg:items-center gap-7 lg:gap-0 w-full'>
                    <div className='lg:flex-1'>
                        <div className='py-8 px-6 shadow-xl w-full md:w-8/12 mx-auto bg-base-100 rounded-md space-y-8 '>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold'>LOGIN</h1>
                                <p className='font-medium text-gray-400'>Doesn't have an account yet? <Link className='text-[#A60FEC] font-semibold underline' to="/register" >Sign Up</Link> </p>
                            </div>
                            <div>
                                <form onSubmit={handleLogin} className='space-y-5'>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>E-mail Address</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="email" name="em" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR E-MAIL</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Password</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="password" name="pass" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR PASSWORD</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-black py-2 md:py-3 w-full text-white font-bold  rounded">LOGIN</button>
                                    </div>
                                </form>
                            </div>
                            <div className='flex items-center'>
                                <div className='border-2 w-full'></div>
                                <span className='font-medium text-gray-400 w-full text-center'>or Login with</span>
                                <div className='border-2 w-full'></div>
                            </div>
                            <div className="space-y-5">
                                <button onClick={handleGoogle} className='flex items-center justify-center gap-3 border-black border-2 py-2.5 w-full rounded-md '>
                                    <FaGoogle></FaGoogle>
                                    <span className='font-bold text-black '>GOOGLE</span>
                                </button>
                                <button onClick={handleTwitter} className='flex items-center justify-center gap-3 border-black border-2 py-2.5 w-full rounded-md '>
                                    <FaTwitter></FaTwitter>
                                    <span className='font-bold text-black '>GOOGLE</span>
                                </button>
                                <button onClick={FaceBookSignIn} className='flex items-center justify-center gap-3 border-black border-2 py-2.5 w-full rounded-md '>
                                    <FaFacebookF></FaFacebookF>
                                    <span className='font-bold text-black '>GOOGLE</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-1'>
                        <img className='w-full md:w-10/12 mx-auto' src="https://i.ibb.co/rfSHjph/ezgif-5-125125aa26.gif" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;