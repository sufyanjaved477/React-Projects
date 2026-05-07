import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const params = useParams()
  return (
    <div className='bg-gray-500 min-h-screen flex items-center justify-center'>
       I am user: {params.username}
    </div>
  )
}

export default User
