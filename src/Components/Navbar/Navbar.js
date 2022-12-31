import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1>Logo</h1>
        <div>
            <Link>Profile</Link>
            <Link>LogOut</Link>
        </div>
    </nav>
  )
}

export default Navbar