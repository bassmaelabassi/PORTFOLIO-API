import React from 'react'

function Header({ toggleDarkMode }) {
  return (
  <header className="w-full bg-white dark:bg-gray-800 p-4 shadow-md">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold"> Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="primary-btn"
      >
        Toggle Dark Mode
      </button>
    </div>
  </header>
  )
}

export default Header
