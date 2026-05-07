import React from 'react'

function Login() {
  return (
    <div className='min-h-screen text-center text-white bg-gray-600' >
      
    <div className=' px-4  border-2 rounded-2xl'>
      
      <div>
        Login
      </div>
      <input  className='bg-gray-400 rounded-[5px] border-none '  type="email" />
      <div>Password</div>
      <input className='bg-gray-400 rounded-[5px] border-none ' type='password'  />

    </div>
    </div>
  )
}

export default Login
