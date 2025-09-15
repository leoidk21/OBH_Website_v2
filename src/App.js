import React from "react";
import Navbar from "./components/Navbar";
import "./components/App.css";
import "./components/Import.css";
import Home from "./pages/Home";
import WeddingPackage from "./pages/WeddingPackage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/Orchestrated-By-HIStory">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding-package" element={<WeddingPackage />} />
      </Routes>
    </Router>
  );
}

export default App;
