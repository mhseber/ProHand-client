import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import lottieRegister from "../assets/Lottie/lottie/Register.json"
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";


const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo,);

        //password validation:
        // show password validation error
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.massage)
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log("Google sign-in success:", result.user);
            })
            .catch((error) => {
                console.error("Google sign-in error:", error);
            });
    };
    return (
        <div className="lg:flex pl-4 pt-3 justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="bg-white shadow-xl shadow-black rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-black">User Register</h1>
                <form onSubmit={handleRegister}>
                    {/* name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    {/* photo Url */}
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">
                            URL
                        </label>
                        <input
                            type="text"
                            id="url"
                            name="photo"
                            placeholder="photo url"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
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
                        className="w-full py-2 rounded-md bg-gradient-to-r from-gray-500 to-gray-800 text-white font-semibold"
                    >
                        Register
                    </button>
                </form>
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full mt-4 btn   text-black font-bold text-xl ">
                    <FcGoogle />
                    Sign In With Google</button>
                <p className="text-center font-bold pt-5 ">
                    All ready Have An Account ?
                    <Link to="/auth/login"><span className="text-black pl-5">Login</span></Link>
                </p>
            </div>
            <div className="w-96">
                <Lottie animationData={lottieRegister}></Lottie>
            </div>
        </div>
    );
};

export default Register;