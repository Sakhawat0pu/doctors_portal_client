import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = () => {
  const location = useLocation();
  const { user, isAdmin, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress color="error"></CircularProgress>;
  } else {
    if (!user.email && !isAdmin) {
      return (
        <Navigate to="/home" state={{ from: location }} replace></Navigate>
      );
    }
    return <Outlet />;
  }
};

export default AdminRoute;
