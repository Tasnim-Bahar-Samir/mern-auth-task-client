import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'


const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.clear()
        navigate('/login')
    }
  return (
    <nav className='py-4 flex justify-between px-10 items-center shadow-md'>
        <h1 className='text-3xl font-bold'>Logo.</h1>
        <div className='flex items-center gap-4'>
            <Link to='/profile'>Profile</Link>
            <button onClick={handleLogout} className='flex gap-1 btn btn-outline items-center'>LogOut<FiLogOut/></button>
        </div>
    </nav>
  )
}

export default Navbar