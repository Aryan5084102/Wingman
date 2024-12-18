import React from 'react'
import Card from './Card';
import { IoChevronDown } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { MdOutlineCarRepair } from "react-icons/md";

const Glance = () => {
    const data = [
        { title: "Consultations", value: "24", change: "15% increase", up: true, icon: <BiSolidMessageRounded /> },
        { title: "Orders Placed", value: "12", change: "15% decrease", up: false, icon: <MdLocalOffer /> },
        { title: "Conversion", value: "50%", change: "15% decrease", up: false, icon: <FaCheck />},
        { title: "Total Sales Value", value: "$2,400", change: "15% increase", up: true, icon: <HiOutlineCircleStack />   },
        { title: "Avg Order Value", value: "$240", change: "15% increase", up: true, icon: <HiOutlineCircleStack />   },
        { title: "Commission Paid", value: "$240", change: "15% increase", up: true, icon: <MdOutlineCarRepair /> },
      ];

  return (
    <div className=" w-full p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-medium text-gray-800">At a glance</h2>
        <div className="bg-gray-200 flex space-x-2 items-center cursor-pointer text-gray-700 border px-4 py-2 rounded-xl">
          <div className=''> 7 days</div>
          <IoChevronDown className='text-xl' />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Glance

