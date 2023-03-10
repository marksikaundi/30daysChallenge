import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Finance</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>Contact</li>

        </ul>
        <div>
          <AiOutlineMenu size={30}/>
        </div>
        <div>
          <ul>
          <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar