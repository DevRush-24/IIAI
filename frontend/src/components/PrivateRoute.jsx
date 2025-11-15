import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = (children) => {
  const token = localStorage.getItem("token"); // or sessionStorage
  const location = useLocation();

  // If not logged in, redirect to login, but remember where they came from
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default PrivateRoute;
