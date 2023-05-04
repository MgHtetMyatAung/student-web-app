import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/header/Header";

const ProtectRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if the user is authenticated on initial load
  //   if (!localStorage.getItem("user")) {
  //     // Navigate to the login page if the user is not authenticated
  //     navigate("/login", { replace: true });
  //   } else if (location.pathname === "/login") {
  //     // Navigate to the home page if the user is authenticated and on the login page
  //     navigate("/", { replace: true });
  //   }
  // }, [location.pathname]);

  return (
    <>
      {(location.pathname !== "/login" && location.pathname !== "/sign-up") && <Header />}
      {children}
    </>
  );
};

export default ProtectRoute;
