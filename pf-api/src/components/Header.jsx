import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ toggleDarkMode }) {
  const navigate = useNavigate();
  return (
  <header className="w-full bg-white dark:bg-gray-800 p-4 shadow-md">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold"> Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="btn primary-btn"
      >
        Toggle Dark Mode
      </button>
      <button
            onClick={() => navigate('/admin')}
            className="p-2 bg-blue-600 text-white rounded  dark:bg-gray-800 p-4 shadow-md">
            Admin
          </button>
    </div>
  </header>
  )
}

export default Header
