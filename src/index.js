import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Lodging from "./pages/Lodging/lodging";
import About from "./pages/About/about";
import Error from "./pages/Page404/page404";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/kasa_pages" element={<Home />}></Route>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/lodging/:id" element={<Lodging />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </HashRouter>
);
