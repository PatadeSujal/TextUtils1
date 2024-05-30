import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; // Adjust the path based on your project structure
import About from "./Components/About";
import TextForm from "./Components/TextForm"; // Adjust the path based on your project structure

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Route path="/Navbar" element={<Navbar />} /> */}
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/textform" element={<TextForm />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
);
