import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase/firebase";

const ProtectedRoute = ({ children }) => {
  if (!auth.currentUser) {
    localStorage.setItem("previousPage", window.location.pathname);
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
