import React from 'react';
import Logo from "../assets/Logo.jpg";
import {FaBars, FaTimes} from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-red-200 text-gray-900'>
            <div>
                <img src={Logo} alt="Logo" style={{width: "50px"}}/>
            </div>

            {/* This is for the navbar */}
            <div>
                <ul className='flex'>
                    <li>About</li>
                    <li>Reservations</li>
                    <li>MTG Schedule</li>
                    <li>Board Game Collection</li>
                    <li>Menu</li>
                    <li>Feedback</li>
                    <li>News</li>
                </ul>
            </div>

        {/* This is for the hamburger Menu */}

        <div>
            <FaBars/>
        </div>
        </div>
    )
};
export default Navbar