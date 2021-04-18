import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="bg-gray-900 h-full shadow-lg">
            <div className="flex items-center pl-6 h-20 border-b border-gray-800">
                <div className="ml-1">
                    <Link to='/' className="relative flex flex-row items-center h-11 focus:outline-none text-gray-500 hover:text-gray-200 border-transparent">
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                </path>
                            </svg>
                        </span>
                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Home</span>
                    </Link>
                </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">


            </div>
        </div>
    );
};

export default Dashboard;