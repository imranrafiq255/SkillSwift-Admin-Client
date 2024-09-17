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
        <div>Home</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
