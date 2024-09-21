import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Accounts = () => {
  return (
    <>
      <div className="accounts-container">
        <div className="header">
          <Header />
        </div>
        <div className="w-full flex justify-center">
          <div className="account-container w-10/12">
            <h1 className="text-4xl font-bold text-[#4e97fd]">
              ServiceProvider Accounts
            </h1>
            <div className="service-provider-account-container w-full flex flex-wrap">
              <div className="account w-4/12 p-5">
                <div className="w-full  bg-[#dadada] flex flex-col items-center p-5 rounded-lg relative">
                  <div className="profile-image rounded-full p-1 border-white border-[1px]">
                    <img
                      src={require("../../Assets/avatar.png")}
                      alt=""
                      className="w-40 h-40 rounded-full"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold mt-2">Imran Malik</h1>
                  <h1 className="text-lg">imran@gmail.com</h1>
                  <h1 className="text-lg">+923036751255</h1>
                  <div className="verify-account w-full flex justify-center">
                    <button className=" bg-emerald-500 hover:bg-emerald-600 w-[80%] text-white py-3 mt-6 rounded-lg">
                      Verify Account
                    </button>
                  </div>
                  <img
                    src={require("../../Assets/black-tick.png")}
                    alt=""
                    className="w-12 h-12 absolute top-10 right-10"
                  />
                </div>
              </div>
              <div className="account w-4/12 p-5">
                <div className="w-full  bg-[#dadada] flex flex-col items-center p-5 rounded-lg relative">
                  <div className="profile-image rounded-full p-1 border-white border-[1px]">
                    <img
                      src={require("../../Assets/avatar.png")}
                      alt=""
                      className="w-40 h-40 rounded-full"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold mt-2">Imran Malik</h1>
                  <h1 className="text-lg">imran@gmail.com</h1>
                  <h1 className="text-lg">+923036751255</h1>
                  <div className="verify-account w-full flex justify-center">
                    <button className=" bg-emerald-500 hover:bg-emerald-600 w-[80%] text-white py-3 mt-6 rounded-lg">
                      Verify Account
                    </button>
                  </div>
                  <img
                    src={require("../../Assets/black-tick.png")}
                    alt=""
                    className="w-12 h-12 absolute top-10 right-10"
                  />
                </div>
              </div>
              <div className="account w-4/12 p-5">
                <div className="w-full  bg-[#dadada] flex flex-col items-center p-5 rounded-lg relative">
                  <div className="profile-image rounded-full p-1 border-white border-[1px]">
                    <img
                      src={require("../../Assets/avatar.png")}
                      alt=""
                      className="w-40 h-40 rounded-full"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold mt-2">Imran Malik</h1>
                  <h1 className="text-lg">imran@gmail.com</h1>
                  <h1 className="text-lg">+923036751255</h1>
                  <div className="verify-account w-full flex justify-center">
                    <button className=" bg-emerald-500 hover:bg-emerald-600 w-[80%] text-white py-3 mt-6 rounded-lg">
                      Verify Account
                    </button>
                  </div>
                  <img
                    src={require("../../Assets/black-tick.png")}
                    alt=""
                    className="w-12 h-12 absolute top-10 right-10"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#4e97fd]">
              Consumer Accounts
            </h1>
            <div className="service-provider-account-container w-full flex flex-wrap">
              <div className="account w-4/12 p-5">
                <div className="w-full  bg-[#dadada] flex flex-col items-center p-5 rounded-lg relative">
                  <div className="profile-image rounded-full p-1 border-white border-[1px]">
                    <img
                      src={require("../../Assets/avatar.png")}
                      alt=""
                      className="w-40 h-40 rounded-full"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold mt-2">Imran Malik</h1>
                  <h1 className="text-lg">imran@gmail.com</h1>
                  <h1 className="text-lg">+923036751255</h1>
                  <div className="verify-account w-full flex justify-center">
                    <button className=" bg-emerald-500 hover:bg-emerald-600 w-[80%] text-white py-3 mt-6 rounded-lg">
                      Verify Account
                    </button>
                  </div>
                  <img
                    src={require("../../Assets/black-tick.png")}
                    alt=""
                    className="w-12 h-12 absolute top-10 right-10"
                  />
                </div>
              </div>
              <div className="account w-4/12 p-5">
                <div className="w-full  bg-[#dadada] flex flex-col items-center p-5 rounded-lg relative">
                  <div className="profile-image rounded-full p-1 border-white border-[1px]">
                    <img
                      src={require("../../Assets/avatar.png")}
                      alt=""
                      className="w-40 h-40 rounded-full"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold mt-2">Imran Malik</h1>
                  <h1 className="text-lg">imran@gmail.com</h1>
                  <h1 className="text-lg">+923036751255</h1>
                  <div className="verify-account w-full flex justify-center">
                    <button className=" bg-emerald-500 hover:bg-emerald-600 w-[80%] text-white py-3 mt-6 rounded-lg">
                      Verify Account
                    </button>
                  </div>
                  <img
                    src={require("../../Assets/black-tick.png")}
                    alt=""
                    className="w-12 h-12 absolute top-10 right-10"
                  />
                </div>
              </div>
              <div className="account w-4/12 p-5">
                <div className="w-full  bg-[#dadada] flex flex-col items-center p-5 rounded-lg relative">
                  <div className="profile-image rounded-full p-1 border-white border-[1px]">
                    <img
                      src={require("../../Assets/avatar.png")}
                      alt=""
                      className="w-40 h-40 rounded-full"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold mt-2">Imran Malik</h1>
                  <h1 className="text-lg">imran@gmail.com</h1>
                  <h1 className="text-lg">+923036751255</h1>
                  <div className="verify-account w-full flex justify-center">
                    <button className=" bg-emerald-500 hover:bg-emerald-600 w-[80%] text-white py-3 mt-6 rounded-lg">
                      Verify Account
                    </button>
                  </div>
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

export default Accounts;
