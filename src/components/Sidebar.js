// src/components/Sidebar.js
import React from 'react';
import logo from './assets/MadiniChapaa-Horizontal-Logo-1 2.svg'; 
const Sidebar = () => {
    return (
        <div className="w-64 h-full bg-white text-black flex flex-col">
            <div className="p-1">
                <img src={logo} alt="Madini Chapaa Logo" className="w-full" />
            </div>
            <nav className="flex-1 px-2 py-4 space-y-2">
                <a href="#" className="block px-4 py-2">Dashboard</a>
                <a href="#" className="block px-4 py-2">Customer</a>
                <a href="#" className="block px-4 py-2">Services</a>
                <a href="#" className="block px-4 py-2">Trading</a>
                <a href="#" className="block px-4 py-2">Loan</a>
                <a href="#" className="block px-4 py-2">Withdrawal Request</a>
                <a href="#" className="block px-4 py-2">User Management</a>
                <a href="#" className="block px-4 py-2">Agents</a>
                <a href="#" className="block px-4 py-2">Organisation</a>
                <a href="#" className="block px-4 py-2">Admin</a>
                <a href="#" className="block px-4 py-2">Others</a>
                <a href="#" className="block px-4 py-2">Products</a>
                <a href="#" className="block px-4 py-2 bg-gray-700 rounded">Mining Location</a>
            </nav>
            <div className="p-4">
                <button className="flex items-center space-x-2">
                    <img src="path_to_profile_image" alt="Profile" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col">
                        <span>Tom Cook</span>
                        <a href="#" className="text-blue-500">View Profile</a>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
