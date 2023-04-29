import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./screen/Home/HomePage";
import Header from "./components/layouts/header/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/> } />
      </Routes>
    </div>
  );
};

export default App;
