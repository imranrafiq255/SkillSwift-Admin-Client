import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleShowSuccessToast } from "../ToastMessages/ToastMessage";
import { Toaster } from "react-hot-toast";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toastMessage = location?.state?.message || null;
  const hasToastShown = useRef(false);
  useEffect(() => {
    if (!hasToastShown.current && toastMessage) {
      hasToastShown.current = true;
      handleShowSuccessToast(toastMessage);
      navigate(location.pathname, { state: { message: null } });
    }
  }, [location.pathname, toastMessage, hasToastShown, navigate]);
  return (
    <>
      <Toaster />
      <div className="home-container">
        <div className="header">
          <Header />
        </div>
        <div>
          <div className="home-container flex justify-center">
            <div className="sub-home-container w-10/12">
              <h1 className="text-4xl font-bold text-[#4e97fd]">
                Dispute Management
              </h1>
              <div className="dispute-container flex justify-center my-5">
                <div className="dispute-sub-container w-8/12 flex flex-wrap gap-5">
                  <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 w-4/12">
                    <h2 className="text-xl font-semibold mb-4">
                      Dispute title
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Amount:</span> Amount
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Reason:</span> Description
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Order ID:</span> Order id
                    </p>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2">
                        Customer Details
                      </h3>
                      <p className="text-gray-600">
                        <span className="font-medium">Name:</span> Customer name
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Email:</span> Customer
                        email
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Phone:</span> Customer
                        phone
                      </p>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2">
                        Service Provider Details
                      </h3>
                      <p className="text-gray-600">
                        <span className="font-medium">Name:</span> Customer name
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Email:</span> Customer
                        email
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Phone:</span> Customer
                        phone
                      </p>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <button
                        className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300"
                        aria-label="Reject dispute"
                      >
                        Button 1
                      </button>
                      <button
                        className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
                        aria-label="Approve dispute"
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 w-4/12">
                    <h2 className="text-xl font-semibold mb-4">
                      Dispute title
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Amount:</span> Amount
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Reason:</span> Description
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Order ID:</span> Order id
                    </p>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2">
                        Customer Details
                      </h3>
                      <p className="text-gray-600">
                        <span className="font-medium">Name:</span> Customer name
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Email:</span> Customer
                        email
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Phone:</span> Customer
                        phone
                      </p>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2">
                        Service Provider Details
                      </h3>
                      <p className="text-gray-600">
                        <span className="font-medium">Name:</span> Customer name
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Email:</span> Customer
                        email
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Phone:</span> Customer
                        phone
                      </p>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <button
                        className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300"
                        aria-label="Reject dispute"
                      >
                        Button 1
                      </button>
                      <button
                        className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
                        aria-label="Approve dispute"
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {false && (
              <div className="w-[50%] bg-[#0b0b0b] absolute top-[20%] right-[25%] rounded-lg">
                <form className="w-full flex flex-col items-center p-10">
                  <textarea
                    className="w-[80%] p-4 bg-transparent border-[0.5px] outline-none border-white text-white"
                    rows={10}
                    placeholder="Enter your resolution message here ..."
                  ></textarea>
                  <div className="button flex justify-end my-4 w-[80%]">
                    <button className="bg-slate-600 text-white px-10 py-2 rounded-lg">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
