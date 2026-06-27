import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const [accountData, setAccountData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // role from localStorage
  const userRole = localStorage.getItem('userRole')

  const handleLogout = () => {
    toast.success("Logged out successfully!")
    localStorage.removeItem('token')
    localStorage.removeItem('Username')
    localStorage.removeItem('userRole')
    localStorage.removeItem('cart')

    setTimeout(() => {
      window.location.href = '/login'
    }, 1500)
  }

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        // get Username from localStorage
        const username = localStorage.getItem('Username')

        if (!username) {
          window.location.href = '/login'  // redirect if not logged in
          return
        }
        
        // Check if username is email or number
        const isEmail = username.includes('@')

        // Send correct query param based on type
        const query = isEmail ? `email=${username}` : `number=${username}`

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/account?${query}`
        )
        const data = await res.json()
        console.log(data)

        if (!data.error) {
          setAccountData(data.data)
        } else {
          setError(data.message)
        }

      } catch (err) {
        setError("Failed to fetch account data")
      } finally {
        setLoading(false)
      }
    }

    fetchAccount()
  }, [])

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-lg">Loading...</p>
    </div>
  )

  if (error) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-red-500 text-lg">{error}</p>
    </div>
  )

  return (
    <div className="relative min-h-screen bg-gray-100">
         {/* ToastContainer for notifications*/}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />

      <div className='bg-slate-700 px-6 py-4 flex items-center justify-between'>
        <h1 className="text-white text-xl font-bold">My Account</h1>
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer tracking-wide"
        >
          Log Out
        </button>
      </div>

      {/* Account Details Card */}
      <div className="flex items-center justify-center mt-16 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

          {/* Avatar / Initial */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center text-white text-3xl font-bold mb-3">
              {accountData?.name?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-bold text-gray-800">{accountData?.name}</h2>
            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full mt-1 capitalize">
              {accountData?.profile}
            </span>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
              <span className="text-gray-400 text-sm w-20 font-medium">Email</span>
              <span className="text-gray-800 text-sm font-semibold">{accountData?.email}</span>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
              <span className="text-gray-400 text-sm w-20 font-medium">Phone</span>
              <span className="text-gray-800 text-sm font-semibold">{accountData?.number}</span>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
              <span className="text-gray-400 text-sm w-20 font-medium">Role</span>
              <span className="text-gray-800 text-sm font-semibold capitalize">{accountData?.profile}</span>
            </div>
          </div>
          {/* ✅ Admin Button — only visible if role is admin */}
          {userRole === 'admin' && (
            <button
              onClick={() => navigate('/admin')}
              className="mt-6 w-full py-3 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Go to Admin Panel 🛠️
            </button>
          )}

        </div>
      </div>

    </div>
  )
}

export default Account