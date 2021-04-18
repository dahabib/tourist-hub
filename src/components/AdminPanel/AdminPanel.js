import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';

const AdminPanel = () => {
    return (
        <section className="bg-gray-50 text-gray-800">
            <div class="grid grid-cols-5 gap-0 min-h-screen w-full">
                <div class="row-span-1">
                    <Sidebar />
                </div>
                <div class="col-span-4">
                    <Dashboard />
                </div>
            </div>

        </section>
    );
};

export default AdminPanel;