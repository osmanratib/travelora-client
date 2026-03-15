import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { FaBackward } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import lottie from '../../../public/Images/Lottie/signup.json'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

 const { createUser } = useContext(AuthContext);
 const navigate = useNavigate();

 const handleForm = (e) => {
  e.preventDefault();
  const form = e.target;

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  console.log(name, email, password, confirmPassword)
  const user = { name, email, password };
  console.log(user);

  if (password.length <= 6) {
   toast.error('Password Length Should Be At Least 6', {
    style: {
     backgroundColor: "#000",
     color : '#fff'
    }
   });
   return;
  }


  createUser(email, password)
   .then(res => {
    console.log(res);
    toast("successfully registered ✅",
     {
      style: {
       backgroundColor: "#000",
       borderRadius: "10px",
       width: "700px",
       color: "#fff"
      },
     }
    )
    form.reset();
    navigate('/')
   })
   .catch(error => {
    console.error(error)
    toast.error(`${error.message}`, {
     style: {
      backgroundColor: "#000",
      borderRadius: "10px",
      width: "700px",
      color: "#fff"
     }
    })
   })
 }


 const testToast = () => {

 }


 return (
  <div className='p-5'>
   <Toaster
    position='right-top'
   />
   <Link to={'/'} ><button className='btn bg-primary-0 text-white ' ><FaBackward />back</button></Link>

   <h1 className='text-center  text-[40px] m-2 text-primary-0 font-changaOne uppercase ' >Register</h1>
   <section className=' flex justify-center mt-5  '  >
    <div className="w-[1000px] h-[600px] border bg-primary-0 rounded-xl flex justify-center gap-16 pt-16">

     <form onSubmit={handleForm} >

      <div className='space-y-5 ' >
       <div className="name flex items-center gap-4  bg-[#526a6e] p-2 rounded-xl ">
        <h1 className='text-white font-bold font-publicSans text-[16px] mt-4' >Your Name </h1>
        <input type="text"
         name='name'
         placeholder='Your Name'
         required
         className='outline-none px-7 select-none py-2 bg-transparent border-b-2 text-white'
        />
       </div>

       <div className=" email flex items-center gap-4  bg-[#526a6e] p-2 rounded-xl ">
        <h1 className='text-white font-bold font-publicSans text-[16px] mt-4' >Your email </h1>
        <input type="email"
         name='email'
         required
         placeholder='email@gmail.com'
         className='outline-none px-7 py-2 bg-transparent border-b-2 text-white'
        />
       </div>

       <div className=" password flex items-center gap-4  bg-[#526a6e] p-2 rounded-xl ">
        <h1 className='text-white font-bold font-publicSans text-[16px] mt-4' > password </h1>
        <input type="password"
         name='password'
         required
         placeholder='password'
         className='outline-none px-7 py-2 bg-transparent border-b-2 text-white'
        />
       </div>

       <div className=" confirmPassword flex items-center gap-4  bg-[#526a6e] p-2 rounded-xl ">
        <h1 className='text-white font-bold font-publicSans text-[16px] mt-4' >confirm password </h1>
        <input type="password"
         name='confirmPassword'
         required
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

    <button onClick={testToast} >toast</button>

   </section>
  </div>
 );
};

export default Register;