import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import "./styles/global.css";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>
        <Route path="/posts" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
