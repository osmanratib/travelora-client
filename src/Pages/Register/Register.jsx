import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { FaBackward, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import lottie from "../../../public/Images/Lottie/signup.json";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, CreateUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

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
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    setGoogleLoading(true);

    CreateUserWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <div className="p-5">
      <Toaster position="top-right" />

      <Link to={"/"}>
        <button className="btn bg-primary-0 text-white">
          <FaBackward /> back
        </button>
      </Link>

      <h1 className="text-center text-[40px] m-2 text-primary-0 font-changaOne uppercase">
        Register
      </h1>

      <section className="flex justify-center mt-5">
        <div className="w-[1000px] h-[630px] border bg-primary-0 rounded-xl flex justify-center gap-16 pt-16 items-center">

          <form onSubmit={handleForm}>
            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-[#526a6e] p-2 rounded-xl">
                <h1 className="text-white font-bold mt-4">Your Name</h1>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="outline-none px-7 py-2 bg-transparent border-b-2 text-white"
                />
              </div>

              <div className="flex items-center gap-4 bg-[#526a6e] p-2 rounded-xl">
                <h1 className="text-white font-bold mt-4">Your Email</h1>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@gmail.com"
                  className="outline-none px-7 py-2 bg-transparent border-b-2 text-white"
                />
              </div>

              <div className="flex items-center gap-4 bg-[#526a6e] p-2 rounded-xl">
                <h1 className="text-white font-bold mt-4">Password</h1>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="outline-none px-7 py-2 bg-transparent border-b-2 text-white"
                />
              </div>

              <div className="flex items-center gap-4 bg-[#526a6e] p-2 rounded-xl">
                <h1 className="text-white font-bold mt-4">Confirm</h1>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  placeholder="confirm password"
                  className="outline-none px-7 py-2 bg-transparent border-b-2 text-white"
                />
              </div>

              <button
                disabled={loading}
                className="bg-white w-[400px] p-3 rounded-xl font-bold uppercase btn"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Register"
                )}
              </button>

              <button
                type="button"
                onClick={handleGoogle}
                disabled={googleLoading}
                className="bg-white w-[400px] p-3 rounded-xl font-bold uppercase 3 flex justify-center items-center gap-2 text-[12px]"
              >
                {googleLoading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <>
                    <FaGoogle /> Create account with Google
                  </>
                )}
              </button>

              <button
                type="button"
                className="bg-white w-[400px] p-3 rounded-xl font-bold uppercase btn flex justify-center items-center gap-2 text-[12px]"
              >
                <FaGithub /> Create account with Github
              </button>
            </div>

            <div className="mt-4">
              <h1 className="text-white">
                Already have an account?{" "}
                <Link to={"/login"} className="underline">
                  Login
                </Link>
              </h1>
            </div>
          </form>

          <div className="w-[300px] h-[300px]">
            <Lottie animationData={lottie}></Lottie>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;