//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <SiteNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
