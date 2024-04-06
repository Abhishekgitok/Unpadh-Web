// App.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
// import Login from "./components/Login";
import Signup from "./components/Signup";

// for animation on scroll
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);

  return (
    <main className=" bg-white dark:bg-zinc-900 mx-auto overflow-hidden   ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />


      </Routes>
    </main>
  );
}

export default App;
