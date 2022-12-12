// Import react and project images

import React from "react";
import Proj1 from "../assets/images/music-en-vivo.png";
import Proj2 from "../assets/images/smart-homies.png";
import Proj3 from "../assets/images/break-away-SS.png";
import Proj4 from "../assets/images/weather.png";
import Proj5 from "../assets/images/scheduler.png";
import Proj6 from "../assets/images/password.png";

// Create a section for the Portfolio content.
function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <br />
      <div class="flex-container" id="gallery">
        <div>
          <a
            href="https://wilmr.github.io/Music-en-Vivo/index.html"
            target="_blank"
            rel="noreferrer">
            <img src={Proj1} alt="Music en Vivo" width={300} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/rnhamlin/smart-homie/tree/develop"
            target="_blank"
            rel="noreferrer">
            <img src={Proj2} alt="Smart Homies" width={300} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/laceyaguigam/Break-Away"
            target="_blank"
            rel="noreferrer">
            <img src={Proj3} alt="TBA" width={300} />
          </a>
        </div>
        <div>
          <a
            href="https://rnhamlin.github.io/weatherwiz/"
            target="_blank"
            rel="noreferrer">
            <img src={Proj4} alt="Weather Wizard" width={300} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/rnhamlin/workdayscheduler"
            target="_blank"
            rel="noreferrer">
            <img src={Proj5} alt="Workday Scheduler" width={300} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/rnhamlin/password-jamboree"
            target="_blank"
            rel="noreferrer">
            <img src={Proj6} alt="Password Jamboree" width={300} />
          </a>
        </div>
      </div>
      <p>Can you see this?</p>
    </section>
  );
}

// Export Portfolio component.
export default Portfolio;
