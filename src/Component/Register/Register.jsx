import React, { useState } from "react";
import "./Register.css";
import Image1 from "./RegisterImgs/RegisterImg1.png";
import LogoImg from "./RegisterImgs/RegisterIcon.svg";
import Google from "./RegisterImgs/GoogleIcon.svg";

export default function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear validation errors when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation for name
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      return;
    }

    // Simple validation for email
    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    } else {
      const emailRegex =
        // eslint-disable-next-line no-useless-escape
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(formData.email.trim())) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email address",
        }));
        return;
      }
    }

    // Complex password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      return;
    } else if (!passwordRegex.test(formData.password.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must be at least 8 characters at least one uppercase letter, one lowercase letter, one special character, and one number.",
      }));
      return;
    }

    // Log the entire form data object to the console
    console.log("Form Data:", formData);

    // Assuming registration is successful, call the onRegisterSuccess callback
    props.onRegisterSuccess();

    // Reset form data
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    // Clear validation errors
    setErrors({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="register-background md:flex md:items-center md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 px-5 md:px-5 lg:px-16 xl:px-56 py-16 md:py-0">
          <div className="md:col-span-7 hidden md:block relative">
            <div className="relative h-full">
              <img src={Image1} alt="" className="h-full object-cover" />

              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div>
                  <img src={LogoImg} alt="" className="w-3/4 h-auto" />
                </div>
                <h1 className="text-center text-[#57FFA5] mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
                  Your Journey Starts<br></br> Here
                </h1>
                <p className="text-white text-sm text-center mt-4 px-10 xl:px-28">
                  Create your Turn Keys account with basic details. It only
                  takes a few minutes to get started.
                </p>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-5 flex flex-col bg-white px-5 md:px-10"
            style={{ fontFamily: "Poppins" }}
          >
            <div className="flex flex-col h-full">
              <h1 className="mt-5 md:mt-8 text-xl font-medium">
                Create an Account
              </h1>
              <p className="text-[#8D8D8D] text-xs mt-2">
                Kindly Fill The Credential To Proceed
              </p>

              <div className="mt-5 md:mt-8">
                <form className="flex flex-col h-full" onSubmit={handleSubmit}>
                  <label className="text-sm">Name</label>
                  <p>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-b-2 border-[#8D8D8D] w-full focus:outline-none mt-2"
                    />
                  </p>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-2">{errors.name}</p>
                  )}

                  <label className="text-sm mt-4">Email</label>
                  <p>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-b-2 border-[#8D8D8D] w-full focus:outline-none mt-2"
                    />
                  </p>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2">{errors.email}</p>
                  )}

                  <label className="text-sm mt-4">Password</label>
                  <p>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="border-b-2 border-[#8D8D8D] w-full focus:outline-none mt-2"
                    />
                  </p>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.password}
                    </p>
                  )}

                  <div className="mt-5 md:mt-8">
                    <button
                      type="submit"
                      className="bg-[#09A350] w-full py-3 text-center text-white text-sm rounded-[8px]"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-5">
                <button className="flex items-center justify-center border-2 border-[#09A350] w-full py-3 text-center text-[#09A350] text-sm rounded-[8px]">
                  <img src={Google} alt="" className="w-4 h-4 mr-2" />
                  Sign up with Google
                </button>
              </div>

              <h1 className="mt-10 mb-10 md:mb-5 md:mt-5 xl:mb-0 xl:mt-10 text-sm">
                Already have an account?
                <span
                  className="text-[#09A350] cursor-pointer"
                  onClick={props.togglePage}
                >
                  {" "}
                  Sign in
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
