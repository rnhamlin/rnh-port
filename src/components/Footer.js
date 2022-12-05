import React from "react";
// import GithubLogo from "./assets/images/GitHub-Mark-64px.png";
// import LinkLogo from "./assets/images/Linked.png";

function Foot() {
  return (
    <footer id="made-by">
      <p>Made with 🌌 by Renée Hamlin</p>
      {/* icons for social go here */}
      <section id="social-media">
        <img src="./assets/images/GitHub-Mark-64px.png" alt="Github" />
        <img src="./assets/images/Linked" alt="LinkedIn" />
      </section>
    </footer>
  );
}

export default Foot;
