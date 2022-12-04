import { findByLabelText } from "@testing-library/react";
import React from "react";

function About() {
  return (
    <section>
      <h1 id="about">Renée Hamlin</h1>
      <br />
      <div id="photo-bio">
        <img src="assets/images/Renee.png" height={250} alt="Renee" />
        <p id="bio-p">
          With a background in education and writing, Renée has long had an
          interest in developing interesting, dynamic web applications. She
          looks forward to developing projects that align with her interests
          (such as volcanos, poetry, and organization). She has had several
          poems published in various literary journals, and hopes to see her web
          applications live online, as well!
        </p>
      </div>
    </section>
  );
}

export default About;
