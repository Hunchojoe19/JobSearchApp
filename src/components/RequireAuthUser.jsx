import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuthUser = () => {
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuthUser;
