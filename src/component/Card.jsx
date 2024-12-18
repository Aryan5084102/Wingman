import React from 'react'
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoTrendingDownOutline } from "react-icons/io5";

const Card = ({ title, value, change, up, icon }) => {
  return (
    <div className="flex flex-col  bg-white p-8  rounded-lg border shadow-xl">
     <div className='flex space-x-2 text-gray-500 text-sm  items-center'>
      <div>{icon}</div>
      <h3 className=" uppercase ">{title}</h3>
     </div>
      <div className="mt-2 flex items-center">
        <span className="text-3xl font-semibold text-gray-900">{value}</span>
      </div>
      <div
        className={`text-base mt-2 ${up ? "text-green-600" : "text-red-600"
          } flex items-center`}
      >
        {up ? (
          <span className="mr-1"><IoTrendingUpOutline /></span>
        ) : (
          <span className="mr-1"><IoTrendingDownOutline /></span>
        )}
        {change}
      </div>
    </div>
  )
}

export default Card