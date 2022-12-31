import React, { useEffect, useState } from 'react'

const Profile = () => {
    const[user,setUser] = useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/user',{
            headers:{
                authorization: localStorage.getItem('auth_token')
            }
        })
        .then(res => res.json())
        .then(data => setUser(data.data))
    },[])
  return (

    <div className='flex items-center justify-center h-screen '>
        <div className=' border py-14 px-5 md:w-[500px] rounded-md'>
            
        <h2 className='font-bold text-2xl border-b mb-10'>My Profile</h2>
        <h2 className=''>Name: <span className='text-xl my-2'>{user.name}</span></h2>
        <h3 className=''>Phone: <span className='text-xl my-2'>{user.phone}</span></h3>
        <h3 className=''>Email: <span className='text-xl my-2'>{user.email}</span></h3>
        <h3 className=''>Address: <span className='text-xl my-2'>{user.address}</span></h3>
        </div>
    </div>
  )
}

export default Profile