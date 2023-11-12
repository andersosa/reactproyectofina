import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import MyNav from "./components/MyNav/MyNav";
import Footer from "./components/Footer/Footer";
import Products from "./screens/Products/Products";
import Error404 from "./screens/Error404/Error404";
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState(null);

  function handleRegister(e) {
    e.preventDefault();
    console.log (input);
    // Lógica para el registro...
  }

  function handleInput(e) {
    setInput ({ ...input, [e.target.name]: e.target.value});
  }

  return (
    <>
      <BrowserRouter>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvL6Ti7xq3Ta1OisRCPqSLB3t4x8fdQyZx78vuAhkNgHxtoXXHZ9X-8QaVPiDtLL92n34&usqp=CAU" width="600px" CentimageWidth="0px" height="150px" />
        </div>

        <MyNav />

        <Routes>
          <Route path="/" element={<Home handleInput={handleInput} handleRegister={handleRegister} />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/sobrenosotros" element={<AboutUs />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

