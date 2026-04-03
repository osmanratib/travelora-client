import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lottie from '../../../public/Images/Lottie/signup.json';
import Lottie from 'lottie-react';
import { FaBackward } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
   const { login, loading } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleForm = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      login(email, password)
         .then(() => {
            toast.success("Successfully logged in ✅", {
               style: { backgroundColor: "#000", color: "#fff", borderRadius: "10px" },
            });
            form.reset();
            navigate('/');
         })
         .catch(error => {
            toast.error(error.message, {
               style: { backgroundColor: "#000", color: "#fff", borderRadius: "10px" },
            });
         });
   };

   return loading ? (
      <h1 className="text-center text-xl mt-20">Loading...</h1>
   ) : (
      <div className="p-5 min-h-screen flex flex-col items-center bg-gray-100">
         <Toaster position="top-right" />

         <Link to="/" className="self-start mb-5">
            <button className="btn bg-primary-0 text-white flex items-center gap-2">
               <FaBackward /> Back
            </button>
         </Link>

         <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-2 text-primary-0 font-changaOne uppercase">
            Login
         </h1>

         <section className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-[1200px] mt-5">
            <form
               onSubmit={handleForm}
               className="flex-1 bg-primary-0 p-6 sm:p-10 rounded-xl flex flex-col gap-5 w-full max-w-md"
            >
               <div className="flex flex-col gap-4">
                  <label className="text-white font-bold font-publicSans text-[16px]">
                     Your Email
                  </label>
                  <input
                     type="email"
                     name="email"
                     required
                     placeholder="email@gmail.com"
                     className="outline-none px-4 py-2 bg-[#526a6e] rounded-xl text-white w-full"
                  />
               </div>

               <div className="flex flex-col gap-4">
                  <label className="text-white font-bold font-publicSans text-[16px]">
                     Password
                  </label>
                  <input
                     type="password"
                     name="password"
                     required
                     placeholder="password"
                     className="outline-none px-4 py-2 bg-[#526a6e] rounded-xl text-white w-full"
                  />
               </div>

               <button className="bg-white text-black py-3 rounded-xl font-bold uppercase mt-4">
                  Login
               </button>

               <p className="text-white font-publicSans text-center mt-4">
                  Not registered yet?{' '}
                  <Link to="/register" className="underline">
                     Register
                  </Link>
               </p>
            </form>

            <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
               <Lottie animationData={lottie} loop={true} />
            </div>
         </section>
      </div>
   );
};

export default Login;