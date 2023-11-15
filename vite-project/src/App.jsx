import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import MyNav from "./components/MyNav/MyNav";
import Footer from "./components/Footer/Footer";
import Error404 from "./screens/Error404/Error404";
import handleInput  from "./screens/Home/Home.jsx";



function App() {
 const [input, setInput] = useState({});
  


  function handleRegister(e) {
    e.preventDefault();
    console.log(input);

    fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok. Status: ${res.status}");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <BrowserRouter>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvL6Ti7xq3Ta1OisRCPqSLB3t4x8fdQyZx78vuAhkNgHxtoXXHZ9X-8QaVPiDtLL92n34&usqp=CAU" 
            alt="Logo de la empresa"
            width="150"
            centimagewith="0px"
            height="150"
          />
        </div>

        <MyNav />

        <Routes>
          <Route
            path="/"
            element={<Home handleInput={handleInput} handleRegister={handleRegister} />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;