import React from 'react'
import { GoHome } from "react-icons/go";
import { BiMessageRounded } from "react-icons/bi";
import { PiUsersFourFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import logo from '../img/Logo.png'

const Sidebar = () => {
  const icon =[<GoHome />, <BiMessageRounded />, <PiUsersFourFill />]

  return (
    <div className='bg-[#115e56] py-4 sticky top-0 left-0  flex flex-col items-center justify-between min-h-screen w-14'>
      <div className='flex flex-col'>
        <img
          src={logo}
          alt='Logo'
          className='py-3 mb-5'
        />
        <div className=' flex-col flex  gap-y-8'>
         {icon.map((item) =>(
          <div className='px-2 py-2 bg-white rounded-xl'>
            <div className='text-xl'>{item}</div>
          </div>
         ))}
        </div>
      </div>
      <div className=''>
        <RiSettings5Fill className='text-xl text-white' />
      </div>
    </div>
  )
}

export default Sidebar