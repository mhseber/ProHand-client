import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import loginLottie from "../assets/Lottie/lottie/login.json"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="lg:flex pl-4 pt-3 justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl shadow-black rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-black">User Login</h1>
                <form>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full  text-white py-2 rounded-md bg-gradient-to-r from-gray-500 to-gray-800  font-semibold"
                    >
                        Login
                    </button>
                </form>
                <button className="w-full mt-4 btn   text-black font-bold text-xl ">
                    <FcGoogle />
                    Google</button>

                <p className="text-center  font-bold pt-5  ">
                    You Have no Account ?
                    <Link to="/auth/register"><span className="text-black pl-5">Register</span></Link>
                </p>

            </div>
            <div className=" w-80 pl-8 pt-4">
                <Lottie animationData={loginLottie}></Lottie>
            </div>
        </div>
    );
};

export default Login;