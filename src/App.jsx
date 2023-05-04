import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./screen/Home/HomePage";
import Header from "./components/layouts/header/Header";
import ProtectRoute from "./components/protectRoute/ProtectRoute";
import LoginPage from "./screen/Auth/LoginPage";
import SignUpPage from "./screen/Auth/SignUpPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <HomePage />
            </ProtectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectRoute>
              <LoginPage />
            </ProtectRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <ProtectRoute>
              <SignUpPage />
            </ProtectRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
