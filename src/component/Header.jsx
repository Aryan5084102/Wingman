import React, { useState } from "react";
import { MdIncompleteCircle } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { PiChatCircleTextFill } from "react-icons/pi";

const Header = () => {
  const [activeButton, setActiveButton] = useState(0);

  const btnData = [
    { icon: <MdIncompleteCircle />, text: "Summary" },
    { icon: <MdLocalOffer />, text: "Sales" },
    { icon: <PiChatCircleTextFill />, text: "Chats" },
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-start md:space-x-6 bg-white sticky top-0 right-0 border px-4 py-4 w-full">
      {btnData.map((data, index) => (
        <div
          key={index}
          className={`rounded-full px-4 py-3 flex space-x-2 items-center cursor-pointer transition-colors duration-300 ${
            activeButton === index
              ? "bg-green-100 text-gray-800"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => setActiveButton(index)}
        >
          <div className="text-lg sm:text-xl">{data.icon}</div>
          <div className="text-sm sm:text-base font-medium">{data.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Header;

