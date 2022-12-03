//UseState is the "hook" to connect components for navigation purposes between sections/components (+ many other things)
import React, { useState } from "react";
// import styles from "./App.css";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

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
    </div>
  );
}

export default App;
