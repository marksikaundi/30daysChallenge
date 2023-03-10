import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Finance App</h1>
        <ul className='flex'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>COMPANY</li>
            <li className='p-4'>ABOUT</li>
            <li className='p-4'>RESOURCES</li>
            <li className='p-4'>CONTACT</li>

        </ul>
    </div>
  )
}

export default Navbar