import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const PlacesTable = () => {
    const [places, setPlaces] = useState();

    useEffect(() => {
        fetch('https://tourist-hub.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])

    return (
        <section className="bg-gray-50 text-gray-800">
            <div className="grid grid-cols-5 gap-0 min-h-screen w-full">
                <div className="row-span-1">
                    <Sidebar />
                </div>

                <div className="col-span-4">
                    <div className="bg-gray-900 shadow-lg">
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
                        <div className="overflow-y-auto overflow-x-hidden flex-grow bg-white h-full">
                            <div className="text-gray-900 bg-gray-200">
                                <div className="p-4 flex">
                                    <h1 className="text-3xl">Places</h1>
                                </div>
                                <div className="px-3 py-4 flex justify-center">
                                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                        <tbody>
                                            <tr className="border-b">
                                                <th className="text-left p-3 px-5">Name</th>
                                                <th className="text-left p-3 px-5">Email</th>
                                                <th className="text-left p-3 px-5">Role</th>
                                                <th className="text-left p-3 px-5">Action</th>
                                            </tr>
                                            <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                                <td className="p-3 px-5"><input type="text" value="user.name" className="bg-transparent" /></td>
                                                <td className="p-3 px-5"><input type="text" value="user.email" className="bg-transparent" /></td>
                                                <td className="p-3 px-5">
                                                    <select value="user.role" className="bg-transparent">
                                                        <option value="user">Admin</option>
                                                        <option value="admin">User</option>
                                                    </select>
                                                </td>
                                                <td className="p-3 px-5 flex justify-end">
                                                    <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                                                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default PlacesTable;