import "./App.css";

import React from "react";
import Header from "./Сomponents/Header";

import Home from "./Pages/Home";
import Meditation from "./Pages/Meditation.jsx";
// import About from "./Pages/About.jsx";
import About from "./Pages/About.jsx";
import Sign from "./Pages/Sign";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    <div className="block">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} />

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
    // {/* </BrowserRouter> */}
  );
}

export default App;
