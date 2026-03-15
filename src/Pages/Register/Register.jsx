import Lottie from 'lottie-react';
import React from 'react';
import { FaBackward } from "react-icons/fa";
import { Link } from 'react-router-dom';
import lottie from '../../../public/Images/Lottie/signup.json'
const Register = () => {
 return (
  <div className='p-5'>

   <Link to={'/'} ><button className='btn bg-primary-0 text-white ' ><FaBackward />back</button></Link>

   <h1 className='text-center  text-[40px] m-2 text-primary-0 font-changaOne uppercase ' >Register</h1>
   <section className=' flex justify-center mt-5  '  >
    <div className="w-[1000px] h-[600px] border bg-primary-0 rounded-xl flex justify-center gap-12 pt-16">

     <form>

      <div className='space-y-5 ' >
       <div className="name flex items-center gap-4  bg-[#526a6e] p-2 rounded-xl ">
        <h1 className='text-white font-bold font-publicSans text-[16px] mt-4' >Your Name </h1>
        <input type="text"
         name='name'
         placeholder='Your Name'
         className='outline-none px-7 py-2 bg-transparent border-b-2 text-white'
        />
       </div>

       <div className=" email flex items-center gap-4  bg-[#526a6e] p-2 rounded-xl ">
        <h1 className='text-white font-bold font-publicSans text-[16px] mt-4' >Your email </h1>
        <input type="email"
         name='email'
         placeholder='email@gmail.com'
         className='outline-none px-7 py-2 bg-transparent border-b-2 text-white'
        />
       </div>

       <div className=" password flex items-center gap-4  bg-[#526a6e] p-2 rounded-xl ">
        <h1 className='text-white font-bold font-publicSans text-[16px] mt-4' > password </h1>
        <input type="password"
         name='password'
         placeholder='password'
         className='outline-none px-7 py-2 bg-transparent border-b-2 text-white'
        />
       </div>

       <div className=" confirmPassword flex items-center gap-4  bg-[#526a6e] p-2 rounded-xl ">
        <h1 className='text-white font-bold font-publicSans text-[16px] mt-4' >confirm password </h1>
        <input type="password"
         name='confirmPassword'
         placeholder='confirm password'
         className='outline-none px-7 py-2 bg-transparent border-b-2 text-white'
        />
       </div> 

      <button className='bg-white w-[400px] p-3 rounded-xl font-publicSans font-bold uppercase btn '  >Register</button> 


      <div>
       <h1 className='text-white font-publicSans ' >Already have an account ? <Link to={'/login'} className='underline' >Login</Link></h1>
      </div>

      </div>


     </form>


     <div className="lottie w-[300px] h-[300px]">
      <Lottie animationData={lottie} ></Lottie>
     </div>


    </div>
   </section>
  </div>
 );
};

export default Register;