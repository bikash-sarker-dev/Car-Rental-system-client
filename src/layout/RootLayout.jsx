import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/footer/Footer";
import Header from "../components/headers/Header";
import { useAuth } from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage";

const RootLayout = () => {
  const { loading } = useAuth();
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
