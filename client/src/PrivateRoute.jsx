import React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = false;
  return isAuthenticated ? children : <Navigate to="/" />;
};
