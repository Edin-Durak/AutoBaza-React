import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar.jsx";
import SectionOne from "./Section-one.jsx";
import SectionTwo from "./Section-two.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <main className="main-content">
      <SectionOne />
      <SectionTwo />
    </main>
  </React.StrictMode>
);
