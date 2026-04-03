import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { FaBackward, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import lottie from "../../../public/Images/Lottie/signup.json";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, CreateUserWithGoogle, createUserWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    createUser(email, password)
      .then(() => {
        toast.success("Successfully registered ✅");
        form.reset();
        navigate("/login");
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    setGoogleLoading(true);
    CreateUserWithGoogle()
      .then(() => navigate("/"))
      .catch((error) => toast.error(error.message))
      .finally(() => setGoogleLoading(false));
  };

  const handleGitHub = () => {
    setGithubLoading(true);
    createUserWithGithub()
      .then(() => navigate("/"))
      .catch((error) => toast.error(error.message))
      .finally(() => setGithubLoading(false));
  };

  return (
    <div className="p-5 min-h-screen flex flex-col items-center bg-gray-100">
      <Toaster position="top-right" />
      <Link to="/" className="self-start mb-5">
        <button className="btn bg-primary-0 text-white flex items-center gap-2">
          <FaBackward /> Back
        </button>
      </Link>

      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-0 font-changaOne uppercase">
        Register
      </h1>

      <section className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-5 w-full max-w-[1200px]">
        <form
          onSubmit={handleForm}
          className="flex-1 w-full max-w-md bg-primary-0 p-6 sm:p-10 rounded-xl flex flex-col gap-5"
        >
          <div className="flex flex-col gap-4">
            <label className="text-white font-bold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="outline-none px-4 py-2 bg-[#526a6e] rounded-xl text-white w-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-white font-bold">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@gmail.com"
              className="outline-none px-4 py-2 bg-[#526a6e] rounded-xl text-white w-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-white font-bold">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="outline-none px-4 py-2 bg-[#526a6e] rounded-xl text-white w-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-white font-bold">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              className="outline-none px-4 py-2 bg-[#526a6e] rounded-xl text-white w-full"
            />
          </div>

          <button
            disabled={loading}
            className="bg-white text-black py-3 rounded-xl font-bold uppercase mt-4"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Register"}
          </button>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={googleLoading}
            className="bg-white text-black py-3 rounded-xl font-bold uppercase mt-2 flex justify-center items-center gap-2"
          >
            {googleLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                <FaGoogle /> Register with Google
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleGitHub}
            disabled={githubLoading}
            className="bg-white text-black py-3 rounded-xl font-bold uppercase mt-2 flex justify-center items-center gap-2"
          >
            {githubLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                <FaGithub /> Register with Github
              </>
            )}
          </button>

          <p className="text-white text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </form>

        <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Lottie animationData={lottie} loop={true} />
        </div>
      </section>
    </div>
  );
};

export default Register;