import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProfileDisplay from '../Header/ProfileDisplay';
import Logo from '../../../images/logo2.png';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center h-10 top-0">
            <Link to='/' className="flex title-font font-medium items-center text-yellow-500 no-underline cursor-pointer md:mb-0">
                <img src={Logo} alt="" className="rounded-full h-12 flex items-center justify-center mr-3" />
                <span className="ml-3 text-xl">Tourist Hub</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center py-2 text-base justify-center">
                <Link to='/' className="mr-5 text-white no-underline">Home</Link>
                <Link to='/places' className="mr-5 text-white no-underline">Places</Link>
                <Link to='/admin/dashboard' className="mr-5 text-white no-underline">Admin</Link>
                <Link to='/contact' className="mr-5 text-white no-underline">Contact us</Link>
            </nav>


            {
                loggedInUser.email ?
                    <>
                        <ProfileDisplay />
                        <Link to='/login' className="inline-flex items-center bg-red-900 text-white px-3 focus:outline-none hover:bg-pink-700 rounded text-base mx-2 p-1 md:mt-0">
                            Logout
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </>
                    :
                    <Link to='/login' className="inline-flex items-center bg-red-400 text-black px-3 focus:outline-none hover:bg-white rounded text-base mx-2 p-1 md:mt-0">
                        <p>{loggedInUser.email}</p>
                        Login
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
            }
        </div>


    );
};

export default Navbar;