import React from 'react'
import Login from '../../Components/Login/Login'

const Account = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div className="relative min-h-screen">
      <div className='bg-slate-700'>
        <button
        onClick={handleLogout}
        className="absolute top-4 right-4 px-6 py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer tracking-wide"
      >
        Log Out
      </button>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <Login />
      </div>
    </div>
  )
}

export default Account