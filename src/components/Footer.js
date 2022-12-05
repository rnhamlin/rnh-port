import React from "react";
import GithubLogo from "/assets/images/GithubLogo.png";
import LinkLogo from "/assets/images/Linked.png";

function Foot() {
  return (
    <footer id="made-by">
      <p>Made with 🌌 by Renée Hamlin</p>
      {/* icons for social go here */}
      <img src={GithubLogo} alt="Github" />
      <img src={LinkLogo} alt="LinkedIn" />
    </footer>
  );
}

export default Foot;
