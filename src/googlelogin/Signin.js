// import React,{useEffect,useState} from "react";
// import {auth,provider} from "./Config"
// import {signInWithPopup} from "firebase/auth"
// import Dashboard from "./Dashboard";
// import Google from "../Component/Register/RegisterImgs/GoogleIcon.svg"


// const Signin = ()=>{
//     const[value,setValue]=useState('')
//     const handleClick = ()=>{
//         signInWithPopup(auth,provider).then((data)=>{
//         setValue(data.user.email)
//         localStorage.setItem("email",data.user.email)
//         })
//     }
//     useEffect(()=>{
//         setValue(localStorage.getItem('email'))
//     })
//     return(
// <>
// {value?<Dashboard/>:


// <button onClick={handleClick} className="flex items-center justify-center border-2 border-[#09A350] w-full py-3 text-center text-[#09A350] text-sm rounded-[8px]">
//                 <img src={Google} alt="" className="w-4 h-4 mr-2" />
//                 Login with Google
//               </button>

// }
// </>
//     );
// }

// export default Signin

import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Dashboard from "./Dashboard";
import Google from "../Component/Register/RegisterImgs/GoogleIcon.svg";

const Signin = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/"); // Navigate to the home page
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []); // Add an empty dependency array to useEffect

  return (
    <>
      {/* {value ? (
        <Dashboard />
      ) : ( */}
        <button
          onClick={handleClick}
          className="flex items-center justify-center border-2 border-[#09A350] w-full py-3 text-center text-[#09A350] text-sm rounded-[8px]"
        >
          <img src={Google} alt="" className="w-4 h-4 mr-2" />
          Login with Google
        </button>
      {/* )} */}
    </>
  );
};

export default Signin;
