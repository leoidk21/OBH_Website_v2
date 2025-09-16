import React from "react";
import Navbar from "./components/Navbar";
import "./components/App.css";
import "./components/Import.css";
import Home from "./pages/Home";
import WeddingPackage from "./pages/WeddingPackage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.22 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/wedding-package"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.22 }}
            >
              <WeddingPackage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router basename="/Orchestrated-By-HIStory">
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
