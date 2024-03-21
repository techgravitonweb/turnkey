import React, { useState, useEffect } from "react";
import logo from "../Images/logo.png";
import logotext from "../Images/logotext.png";
import { Link,useLocation } from "react-router-dom";
import Scrollup from "../Scrollup";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../googlelogin/Config";
import { signOut } from "firebase/auth";
import { FiUser, FiChevronDown } from 'react-icons/fi';
import { TbMessage2Check } from "react-icons/tb";
import { BiCommentAdd } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { GiCarKey } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";






const NavigationBar = () => {
  const [user] = useAuthState(auth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdowns = () => {
    setIsBusinessOpen(false);
    setIsTrainingOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  // Scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  // hide navbar in register page
  const location1 = useLocation();
  const flag = location1.pathname.includes("/RegisterLogin") || location1.pathname.includes("/Whatsapp")|| location1.pathname.includes("/UserDashboard")
  || location1.pathname.includes("/AddListing");

  if (flag) {
    return <></>;
  } else {
    
    return (
    <>
      <nav
        className={`top-0 left-0 right-0 z-50 ${
          isScrolled
            ? "fixed bg-white text-black shadow-b-lg px-5 py-3 sm:px-10 md:px-14 lg:px-20 xl:px-24"
            : "bg-white  text-black px-5 py-3 sm:px-10 md:px-14 lg:px-20 xl:px-24"
        }`}
      >
        <Scrollup />
        <div
          className="flex justify-between items-center"
          style={{ fontFamily: "Poppins" }}
        >
          <Link to="/" className="flex items-center">
            <img className="w-25 h-10 cursor-pointer pr-4" src={logo} alt="" />
            <img className="w-15 h-5 cursor-pointer" src={logotext} alt="" />
          </Link>

          <div className="lg:hidden">
            {/* Hamburger Icon */}

            <button
              className="p-2 focus:outline-none third-dropdown-button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Drawer */}

          {isDrawerOpen && (
            <div className="lg:hidden absolute top-0 right-0 h-screen w-full bg-white  p-4 shadow-md z-50">
              <button
                className="text-black p-2 focus:outline-none absolute top-2 right-2"
                onClick={() => setIsDrawerOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/HowItWork"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    How it Works?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SwappingMain"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    SwappingPlace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Notification"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Notification
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
              <Link
                to="/AddListing"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                Add Listing
              </Link>
            </li>
              </ul>

              <div className="mt-5">
                
                {user ? (
                    <>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div onClick={toggleDropdown} style={{ display: 'flex', cursor: 'pointer', alignItems: 'center',marginTop:'-13px' }}>
        <FiUser className="mt-1" />
        <p className="mx-1">My Account</p>
        <FiChevronDown />
      </div>

      {isDropdownOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            marginLeft: '10px',
            border: '1px solid #ccc',
            padding: '5px',
            borderRadius: '5px',
            backgroundColor: 'white',
            zIndex: '1', // Ensures the dropdown appears above other elements
            fontSize:'12px'
          }}
        >








          <p className="mt-1">Hello, {user.email}</p>
          <p className="mt-1">My Profile</p>
          <div className="mt-1" style={{display:'flex'}}><GiCarKey className="mt-1"/>
<p className="mx-1">My Exchanges</p></div>
          <div className="mt-1" style={{display:'flex'}}><TbMessage2Check className="mt-1"/>
          <p className="mx-1">Messages</p></div>
          <div className="mt-1" style={{display:'flex'}}><BiCommentAdd className="mt-1"/>
          <p className="mx-1">Add a Property</p></div>
          <div className="mt-1" style={{display:'flex'}}><FaRegHeart className="mt-1"/>
          <p className="mx-1">Favourite Home</p></div>
          <div className="mt-1" style={{display:'flex'}}><BiHelpCircle className="mt-1"/>
          <p className="mx-1">Help & Support</p></div>
          <div
            onClick={() => {
              signOut(auth);
              closeDropdowns();
            }}
            className="text-black-500"
            style={{display:'flex',color:'green',fontWeight:'500'}}
          >
           <IoIosLogOut className="mt-1"/><p className="mx-1"> Logout
</p>
          </div>
        </div>
      )}
    </div>
                
                      {/* <li>
                        <span className="text-black-500">
                          Hello, {user.email}
                        </span>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            signOut(auth);
                            closeDropdowns();
                          }}
                          className="text-black-500"
                        >
                          Logout
                        </button>
                      </li> */}
                    </>
                  ) : (
                    <li style={{listStyleType:'none'}}>
                      <Link
                        to="/RegisterLogin"
                        className="rounded-[4px] px-5 py-2 font-semibold  bg-[#09A350] text-white"
                        onClick={() => closeDropdowns()}
                      >
                        Register/Login
                      </Link>
                    </li>
                  )}
                </div>
            </div>
          )}

          {/* for desktop */}

          <ul className="hidden lg:flex text-md font-medium space-x-6">
            <li>
              <Link
                to="/"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/HowItWork"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                to="/SwappingMain"
                className="text-black-500"
                onClick={() => setIsDrawerOpen(false)}
              >
                Swapping Place
              </Link>
            </li>
            <li>
              <Link
                to="/Notification"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                Notification
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/AddListing"
                className="text-black-500"
                onClick={() => closeDropdowns()}
              >
                Add Listing
              </Link>
            </li>
            {/* <li>
                  <Link
                    to="/Swappingoptionpage"
                    className="text-black-500"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                  Swapping option page
                  </Link>
                </li> */}
          </ul>

          {/* <div className="hidden lg:flex justify-center text-white "> */}
          <div className="mt-5">
                
                {user ? (
                    <>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div onClick={toggleDropdown} style={{ display: 'flex', cursor: 'pointer', alignItems: 'center',marginTop:'-13px' }}>
        <FiUser className="mt-1" />
        <p className="mx-1">My Account</p>
        <FiChevronDown />
      </div>

      {isDropdownOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            marginLeft: '10px',
            border: '1px solid #ccc',
            padding: '5px',
            borderRadius: '5px',
            backgroundColor: 'white',
            zIndex: '1', // Ensures the dropdown appears above other elements
            fontSize:'12px'
          }}
        >








          <p className="mt-1">Hello, {user.email}</p>
          <p className="mt-1">My Profile</p>
          <div className="mt-1" style={{display:'flex'}}><GiCarKey className="mt-1"/>
<p className="mx-1">My Exchanges</p></div>
          <div className="mt-1" style={{display:'flex'}}><TbMessage2Check className="mt-1"/>
          <p className="mx-1">Messages</p></div>
          <div className="mt-1" style={{display:'flex'}}><BiCommentAdd className="mt-1"/>
          <p className="mx-1">Add a Property</p></div>
          <div className="mt-1" style={{display:'flex'}}><FaRegHeart className="mt-1"/>
          <p className="mx-1">Favourite Home</p></div>
          <div className="mt-1" style={{display:'flex'}}><BiHelpCircle className="mt-1"/>
          <p className="mx-1">Help & Support</p></div>
          <div
            onClick={() => {
              signOut(auth);
              closeDropdowns();
            }}
            className="text-black-500"
            style={{display:'flex',color:'green',fontWeight:'500'}}
          >
           <IoIosLogOut className="mt-1"/><p className="mx-1"> Logout
</p>
          </div>
        </div>
      )}
    </div>
                
                      {/* <li>
                        <span className="text-black-500">
                          Hello, {user.email}
                        </span>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            signOut(auth);
                            closeDropdowns();
                          }}
                          className="text-black-500"
                        >
                          Logout
                        </button>
                      </li> */}
                    </>
                  ) : (
                    <li style={{listStyleType:'none'}}>
                      <Link
                        to="/RegisterLogin"
                        className="rounded-[4px] px-5 py-2 font-semibold  bg-[#09A350] text-white"
                        onClick={() => closeDropdowns()}
                      >
                        Register/Login
                      </Link>
                    </li>
                  )}
                </div>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
  }
};

export default NavigationBar;



