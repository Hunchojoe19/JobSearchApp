import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuthOrg = () => {
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuthOrg;
