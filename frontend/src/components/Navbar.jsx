import React, { useContext } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import  {AuthContext}  from '../context/AuthContext'
import { FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
export const Navbar = () => {
 const {user ,logout} = useContext(AuthContext)
 const navigate = useNavigate()

 const handleLogout = () =>{
    logout()
    navigate('/login')
 }

  return (
    <nav className='bg-gray-900 shadow-lg'>
        <div className = 'container mx-auto px-4'>
             <div className='flex flex-col md:flex-row justify-between items-center py-4 gap-4'>
                <Link to  ="/" className= "text-white text-2xl font-bold flex items-center gap-2">
                <FaTicketAlt />
                Event Booking System
                </Link>
                 <Link to = '/' className='text-gray-200 hover:text-white transition cursor-pointer'>
                  Events
                 </Link>
                 {user ? (
                   <>
                   <Link to = {user.role === 'admin' ? '/admin' : '/dashboard'} className='text-gray-200 hover:text-white transition cursor-pointer'>
                   {user.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
                   </Link>
                   <button onClick={handleLogout} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition'>Logout</button>
                   </>
                 ) : (
                    <><Link to='/login' className='text-gray-200 hover:text-white transition cursor-pointer'>Login</Link><Link to='/register' className='text-gray-200 hover:text-white transition cursor-pointer'>Register</Link></>
                 )}
             </div>
        </div>
    </nav>
  )
}
export default Navbar