import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav bg-green-400 py-4 px-6 flex justify-between'>
        <h1 className='text-white font-sans text-4xl font-light'>Responsive Card Style Layout</h1>
        
        <ul className='flex gap-10 underline'>
          <li><Link to='/' className='text-white font-medium text-2xl'>Main Content</Link></li>
          <li><Link to='crud' className='text-white font-medium text-2xl'>Users Page</Link></li>
          <li><Link to='*' className='text-white font-medium text-2xl'>Registration</Link></li>
        </ul>
        
        
    </div>
  )
}

export default Navbar