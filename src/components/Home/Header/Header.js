import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProfileDisplay from './ProfileDisplay';
import Logo from '../../../images/logo2.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={Logo} alt="" className="rounded-full h-12 flex items-center justify-center mr-3" />
                    <span className="ml-3 text-xl">Tourist Hub</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to='/places' className="mr-5 hover:text-gray-900">Places</Link>
                    <Link to='/admin/dashboard' className="mr-5 hover:text-gray-900">Admin</Link>
                    <Link to='/contact' className="mr-5 hover:text-gray-900">Contact us</Link>
                </nav>

                <ProfileDisplay />
                {
                    loggedInUser.email ? 
                    <Link to='/login' className="inline-flex items-center bg-red-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0">
                        
                        Logout
                        
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                    :
                    <Link to='/login' className="inline-flex items-center bg-green-600 text-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">
                        <p>{loggedInUser.email}</p>
                        Login
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                }

            </div>
        </header>
    );
};

export default Header;