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

export const PrivateRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return isAuth ? children : <Navigate to="/" />;
};
