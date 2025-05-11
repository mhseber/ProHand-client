import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import loginLottie from "../assets/Lottie/lottie/login.json";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log("sign InUser", result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
        }, 1600);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google sign-in success:", result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/");
        }, 1600);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };
  return (
    <div className="items-center justify-center min-h-screen pt-3 pl-4 text-gray-900 bg-gray-100 lg:flex dark:bg-gray-800 dark:text-white">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl shadow-black">
        <h1 className="mb-6 text-2xl font-bold text-center text-black">
          User SignIn
        </h1>
        <form onSubmit={handleSignIn}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
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
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-700"
            >
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
            className="w-full py-2 font-semibold text-white rounded-md bg-gradient-to-r from-gray-500 to-gray-800"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 text-xl font-bold text-black btn "
        >
          <FcGoogle />
          Sign In With Google
        </button>

        <p className="pt-5 font-bold text-center dark:text-black ">
          You Have no Account ?
          <Link to="/auth/register">
            <span className="pl-5 text-black">Register</span>
          </Link>
        </p>
      </div>
      <div className="pt-4 pl-8 w-80">
        <Lottie animationData={loginLottie}></Lottie>
      </div>
    </div>
  );
};

export default Login;
