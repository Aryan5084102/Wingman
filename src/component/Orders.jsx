import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Orders = () => {
  const orders = [
    { id: 1, productName: "Product Name...", date: "24 Apr '2024", time: "10:24 AM", duration: "2h 5m", value: "$120,21", commission: "$55" },
    { id: 2, productName: "Product Name...", date: "30 Apr '2024", time: "10:24 AM", duration: "2h 5m", value: "$120,21", commission: "$55" },
    { id: 3, productName: "Product Name...", date: "04 June '2023", time: "10:24 AM", duration: "2h 5m", value: "$120,21", commission: "$55" },
    { id: 4, productName: "Product Name...", date: "12 Aug '2014", time: "10:24 AM", duration: "2h 5m", value: "$120,21", commission: "$55" },
    { id: 5, productName: "Product Name...", date: "25 Dec '2022", time: "10:24 AM", duration: "2h 5m", value: "$120,21", commission: "$55" },
    { id: 6, productName: "Product Name...", date: "30 Nov '2024", time: "10:24 AM", duration: "2h 5m", value: "$120,21", commission: "$55" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [activeChat, setActiveChat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "ascending", sortLevel: "full" });

  const ordersPerPage = 4;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    setActiveChat(null);
  };

  const handleViewChat = (order) => {
    setActiveChat(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveChat(null);
  };

  const handleSendMessage = () => {
    console.log("Message sent!");
    handleCloseModal();
  };

  const handleSort = (key, sortLevel) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction, sortLevel });
  };

  const getDateValue = (date, sortLevel) => {
    const dateObj = new Date(date);
    if (sortLevel === "month") return dateObj.getMonth(); // Get Month (0-11)
    if (sortLevel === "year") return dateObj.getFullYear(); // Get Year
    return dateObj; // Default is full date
  };

  const sortedOrders = [...orders].sort((a, b) => {
    const isAsc = sortConfig.direction === "ascending";
    const aValue = getDateValue(a[sortConfig.key], sortConfig.sortLevel);
    const bValue = getDateValue(b[sortConfig.key], sortConfig.sortLevel);

    if (aValue < bValue) return isAsc ? -1 : 1;
    if (aValue > bValue) return isAsc ? 1 : -1;
    return 0;
  });

  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;
  const currentOrders = sortedOrders.slice(firstOrderIndex, lastOrderIndex);

  const tableHeaderData = [
    { label: "Product", key: "productName" },
    { label: "Date", key: "date" },
    { label: "Time spent", key: "duration" },
    { label: "Order Value", key: "value" },
    { label: "Commission", key: "commission" },
  ];

  return (
    <div className="mt-5 p-8">
      <h2 className="text-4xl font-medium text-gray-800 mb-6">Orders</h2>

      <div className="overflow-hidden border rounded-lg shadow-sm bg-white">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left">
              {tableHeaderData.map(({ label, key }) => (
                <th
                  key={key}
                  className="px-6 py-3 text-sm font-medium text-gray-500 cursor-pointer"
                  onClick={() => handleSort(key, "full")}
                >
                  {label}
                  {sortConfig.key === key && (
                    <span className={`ml-2 text-2xl font-black ${sortConfig.direction === "ascending" ? "text-gray-700" : "text-gray-400"}`}>
                      {sortConfig.direction === "ascending" ? "↑" : "↓"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {currentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
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

                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  <div>{order.date}</div>
                  <div className="text-sm text-gray-400">{order.time}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                  {order.duration}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                  {order.value}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-semibold">
                  {order.commission}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-gray-500 hover:text-indigo-500 text-sm">
                  <button
                    onClick={() => handleViewChat(order)}
                    className="inline-flex items-center"
                  >
                    View Chat{" "}
                    <span className="ml-1 text-xl">
                      <GoArrowUpRight />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(orders.length / ordersPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </div>

      {isModalOpen && activeChat && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              Chat for {activeChat.productName}
            </h3>
            <p>
              <strong>Order Date:</strong> {activeChat.date}
            </p>
            <p>
              <strong>Order Time:</strong> {activeChat.time}
            </p>
            <p>
              <strong>Order Value:</strong> {activeChat.value}
            </p>
            <p>
              <strong>Commission:</strong> {activeChat.commission}
            </p>
            <div className="mt-4">
              <textarea
                className="w-full border rounded p-3"
                rows="5"
                placeholder="Type your message here..."
              ></textarea>
              <button
                onClick={handleSendMessage}
                className="mt-3 px-6 py-2 bg-indigo-500 text-white rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
