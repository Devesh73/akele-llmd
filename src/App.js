// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import LocationManagement from './components/LocationManagement';

function App() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <LocationManagement />
        </div>
    );
}

export default App;
