import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    const [showDropdown, setShowDropdown] = useState(false);
    //const navigate = useNavigate();

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownItemClick = () => {
        setShowDropdown(false); // Close dropdown after clicking an item
    };

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[950px] py-4 mx-auto'>
            <Link to="/" >
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className='text-white text-l flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/planner">Meal Planner</Link>
                    </li>
                    <li>
                        <Link to="/nutritioncalculator">Nutrious Counter</Link>
                    </li>
                    <li>
                        <button onClick={toggleDropdown}>More</button>
                        {showDropdown && (
                            <ul className="absolute top-10 mt-7 bg-slate-200 border border-gray-200 p-3 rounded-md shadow-md text-richblack-800">
                                <li>
                                    <Link to="/page1" onClick={handleDropdownItemClick}>Page 1</Link>
                                </li>
                                <li>
                                    <Link to="/page2" onClick={handleDropdownItemClick}>Page 2</Link>
                                </li>
                                {/* Add more dropdown items as needed */}
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            <div className='flex gap-x-4 items-center'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Log in
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                            Sign up
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logout Sucessfully")
                        }}
                            className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100">
                            Logout
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 text-richblack-100">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
