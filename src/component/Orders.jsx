import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Orders = () => {
  const orders = [
    {
      id: 1,
      productName: "Product Name...",
      date: "24 Apr '2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120,21",
      commission: "$55",
    },
    {
      id: 2,
      productName: "Product Name...",
      date: "24 Apr '2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120,21",
      commission: "$55",
    },
    {
      id: 3,
      productName: "Product Name...",
      date: "24 Apr '2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120,21",
      commission: "$55",
    },
    {
      id: 4,
      productName: "Product Name...",
      date: "24 Apr '2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120,21",
      commission: "$55",
    },
    {
      id: 5,
      productName: "Product Name...",
      date: "25 Apr '2024",
      time: "11:00 AM",
      duration: "1h 45m",
      value: "$150,50",
      commission: "$60",
    },
    {
      id: 6,
      productName: "Product Name...",
      date: "25 Apr '2024",
      time: "11:15 AM",
      duration: "1h 20m",
      value: "$130,75",
      commission: "$65",
    },
    {
      id: 7,
      productName: "Product Name...",
      date: "25 Apr '2024",
      time: "11:00 AM",
      duration: "1h 45m",
      value: "$150,50",
      commission: "$60",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 4;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Calculate current orders for the selected page
  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;
  const currentOrders = orders.slice(firstOrderIndex, lastOrderIndex);

  const tableHeaderData = [
    "Product",
    "Date",
    "Time spent",
    "Order Value",
    "Commission",
  ];

  return (
    <div className="mt-5 p-8">
      {/* Title */}
      <h2 className="text-4xl font-medium text-gray-800 mb-6">Orders</h2>

      {/* Table */}
      <div className="overflow-hidden border rounded-lg shadow-sm bg-white">
        <table className="w-full divide-y divide-gray-200">
          {/* Table Head */}
          <thead className="bg-gray-50">
            <tr className="text-left">
              {tableHeaderData.map((text) => (
                <th
                  key={text}
                  className="px-6 py-3 text-sm font-medium text-gray-500"
                >
                  {text}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {currentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                {/* Product Column */}
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img
                    src="https://www.portronics.com/cdn/shop/files/ortronics_harmoncis_twins_s19_bluetooth_earbuds.jpg?v=1731411470&width=533"
                    alt="Product"
                    className="w-8 h-8 rounded mr-4"
                  />
                  <span className="text-gray-800 font-medium">
                    {order.productName}
                  </span>
                </td>

                {/* Date Column */}
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  <div>{order.date}</div>
                  <div className="text-sm text-gray-400">{order.time}</div>
                </td>

                {/* Time Spent Column */}
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                  {order.duration}
                </td>

                {/* Order Value Column */}
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                  {order.value}
                </td>

                {/* Commission Column */}
                <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-semibold">
                  {order.commission}
                </td>

                {/* Action Column */}
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 hover:text-indigo-500 text-sm">
                  <a href="#" className="inline-flex items-center">
                    View Chat{" "}
                    <span className="ml-1 text-xl">
                      <GoArrowUpRight />
                    </span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(orders.length / ordersPerPage)} // Total pages
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary" 
          />
        </Stack>
      </div>
    </div>
  );
};

export default Orders;

