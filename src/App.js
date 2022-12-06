//UseState is the "hook" to connect components for navigation purposes between sections/components (+ many other things)
import "App.css";
import React, { useState } from "react";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Foot from "./components/Footer";

//JXS code below (Javascript + HTML)

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      {<Nav setCurrentPageprop={setCurrentPage}></Nav>}
      <main>
        {currentPage === "About" ? <About></About> : <></>}
        {currentPage === "Portfolio" ? <Portfolio></Portfolio> : <></>}
        {currentPage === "Contact" ? <Contact></Contact> : <></>}
        {currentPage === "Resume" ? <Resume></Resume> : <></>}
      </main>
      <Foot></Foot>
    </div>
  );
}

export default App;
