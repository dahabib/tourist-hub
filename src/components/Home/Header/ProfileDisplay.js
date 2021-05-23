import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const ProfileDisplay = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div class="group inline-block">
            <button class="outline-none focus:outline-none rounded-md border border-gray-300 px-3 py-1 flex items-center min-w-32">
                <span class="pr-1 font-semibold flex-1 text-white">
                    {
                        loggedInUser.email && loggedInUser.name
                    }
                </span>
                <span>
                    {
                        loggedInUser.email && <img className="px-1 h-6 rounded-full" src={loggedInUser.photo} alt="{loggedInUser.name}"/>
                    }
                </span>
            </button>
        </div>
    );
};

export default ProfileDisplay;