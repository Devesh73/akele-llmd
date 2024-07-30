// src/components/LocationManagement.js
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const LocationManagement = () => {
    const locations = [
        { id: 1, name: 'South Africa', person: 'Justin', contact: '+63 752 25485', email: 'justin@gmail.com', orgId: '434345', status: 'Active' },
        { id: 2, name: 'North Africa', person: 'Marcus John', contact: '+55 254 24584', email: 'mark@gmail.com', orgId: '656453', status: 'Inactive' },
        // Add more locations as needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const locationsPerPage = 5;

    // Logic for displaying current locations
    const indexOfLastLocation = currentPage * locationsPerPage;
    const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
    const currentLocations = locations.slice(indexOfFirstLocation, indexOfLastLocation);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(locations.length / locationsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="bg-white p-6 rounded shadow-lg flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Location Management</h1>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-500">
                            <FaFilter />
                        </button>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="px-4 py-2 border rounded"
                        />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        + Add New Location
                    </button>
                </div>
                <p>Total number of Location - 250</p>
                <div className="mt-4">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">LOCATION ID</th>
                                <th className="py-2 px-4 border-b">LOCATION NAME</th>
                                <th className="py-2 px-4 border-b">PERSON IN CHARGE</th>
                                <th className="py-2 px-4 border-b">CONTACT NUMBER</th>
                                <th className="py-2 px-4 border-b">EMAIL ADDRESS</th>
                                <th className="py-2 px-4 border-b">ORGANIZATION ID</th>
                                <th className="py-2 px-4 border-b">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentLocations.map((location, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b">{location.id}</td>
                                    <td className="py-2 px-4 border-b">{location.name}</td>
                                    <td className="py-2 px-4 border-b">{location.person}</td>
                                    <td className="py-2 px-4 border-b">{location.contact}</td>
                                    <td className="py-2 px-4 border-b">{location.email}</td>
                                    <td className="py-2 px-4 border-b">{location.orgId}</td>
                                    <td className="py-2 px-4 border-b">{location.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-auto mb-2">
                <div className="flex justify-center">
                    <nav className="block">
                        <ul className="flex pl-0 rounded list-none flex-wrap">
                            {pageNumbers.map(number => (
                                <li key={number} className="first:ml-0 text-xs font-semibold flex m-2">
                                    <button 
                                        onClick={() => setCurrentPage(number)} 
                                        className={`w-full border-0 py-1 px-3 leading-tight ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default LocationManagement;
