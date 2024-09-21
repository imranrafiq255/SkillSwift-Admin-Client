import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Refund = () => {
  return (
    <>
      <div className="refund-container">
        <div className="header">
          <Header />
        </div>
        <div className="flex w-full justify-center">
          <div className="refund-container w-8/12">
            <h1 className="text-4xl font-bold text-[#4e97fd]">
              Refund Management
            </h1>
            <div className="refunds">
              <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 w-4/12 my-4">
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2">
                    Refund Requested By
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Name:</span> Customer name
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> Customer email
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> Customer phone
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2">
                    Refund Requested Against
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Name:</span> Customer name
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> Customer email
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> Customer phone
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Refund Details</h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Refund Amount:</span> $100
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Refund Reason:</span> Customer
                    complaint
                  </p>
                  <h1 className="py-2 px-4 rounded-3xl text-white bg-green-600 inline-block mt-5">
                    Pending
                  </h1>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300"
                    aria-label="Reject refund"
                  >
                    Reject
                  </button>
                  <button
                    className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
                    aria-label="Approve refund"
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Refund;
