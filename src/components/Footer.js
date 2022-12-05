import React from "react";
import GithubLogo from "../assets/images/GitHub-Mark-64px.png";
import LinkedInLogo from "../assets/images/Linked.png";

//Footer to contain social media links.
function Foot() {
  return (
    <footer id="made-by">
      <p>Made with 🌌 by Renée Hamlin</p>
      {/* icons for social go here */}
      <section id="social-media">
        <a href="https://github.com/rnhamlin" target="_blank" rel="noreferrer">
          <img src={GithubLogo} alt="GitHub" height={45} />
        </a>
        <a
          href="https://www.linkedin.com/in/reneehamlin/"
          target="_blank"
          rel="noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" height={45} />
        </a>
      </section>
    </footer>
  );
}

// Export footer component.
export default Foot;
