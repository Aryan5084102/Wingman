import React, { useState } from 'react';
import { MdHomeFilled } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { PiUsersFourFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import logo from '../img/Logo.png';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(0); 

  const iconData = [
    { icon: <MdHomeFilled />, name: "Home" },
    { icon: <BiSolidMessageRounded />, name: "Messages" },
    { icon: <PiUsersFourFill />, name: "Users" },
  ];

  return (
    <div className='bg-[#115e56] py-4 sticky top-0 left-0 flex flex-col items-center justify-between min-h-screen w-14'>
      <div className='flex flex-col'>
        <img
          src={logo}
          alt='Logo'
          className='py-3 mb-5'
        />
        <div className='flex flex-col gap-y-8'>
          {iconData.map((item, index) => (
            <div
              key={index}
              className={`px-2 py-2 rounded-xl cursor-pointer ${
                activeButton === index ? 'bg-white' : 'bg-transparent'
              }`}
              onClick={() => setActiveButton(index)} 
            >
              <div
                className={`text-xl ${
                  activeButton === index ? 'text-[#115e56]' : 'text-white'
                }`}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`px-2 py-2 rounded-xl cursor-pointer ${
          activeButton === iconData.length ? 'bg-white' : 'bg-transparent'
        }`}
        onClick={() => setActiveButton(iconData.length)} 
      >
        <RiSettings5Fill
          className={`text-xl ${
            activeButton === iconData.length ? 'text-[#115e56]' : 'text-white'
          }`}
        />
      </div>
    </div>
  );
};

export default Sidebar;

