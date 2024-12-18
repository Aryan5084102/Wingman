import React from 'react'
import { MdIncompleteCircle } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { PiChatCircleTextFill } from "react-icons/pi";

const Header = () => {
  const btnData = [
    { icon: <MdIncompleteCircle />, text: "Summary" },
    { icon: <MdLocalOffer />, text: "Sales" },
    { icon: <PiChatCircleTextFill />, text: "Chats" },
  ]
  return (
    <div className='flex space-x-10 bg-white sticky top-0 right-0 border px-10 py-5 w-full'>
      {btnData.map((data, index) => (
        <div key={index} className='rounded-full  px-3 py-3 flex space-x-2 items-center bg-green-100'>
          <div>{data.icon}</div>
          <div className='text-base font-medium'>{data.text}</div>
        </div>
      ))}
    </div>
  )
}

export default Header