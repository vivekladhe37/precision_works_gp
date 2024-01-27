import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./Components/Services";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Capabilities from "./Components/Capabilities";
import Industries from "./Components/Industries";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
    </Router>
  );
}

export default App;
