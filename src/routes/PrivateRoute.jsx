import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  console.log(location);

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
