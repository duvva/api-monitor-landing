import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage"; // Import the LandingPage component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandingPage /> {/* Render the LandingPage component */}
  </React.StrictMode>
);