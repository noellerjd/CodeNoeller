import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "./assets/font.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={About} />
          <Route path="/blog" element={Blog} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
