import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const ProfileDisplay = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div class="group inline-block">
            <button class="outline-none focus:outline-none border px-3 py-1 bg-white flex items-center min-w-32">
                <span class="pr-1 font-semibold flex-1">
                    {
                        loggedInUser.email && loggedInUser.name
                    }
                </span>
                <span>
                    {
                        loggedInUser.email && <img className="px-1 h-6 rounded-xl" src={loggedInUser.photo} alt="" />
                    }
                </span>
            </button>
            <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Profile</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Logout</li>
            </ul>
        </div>
    );
};

export default ProfileDisplay;