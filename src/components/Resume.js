import React from "react";
import ResumeDoc from "../assets/files/rh-resume.pdf";

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <br />
      <div id="resume-paragraphs">
        <h3>Resume Highlights</h3>
        <div id="highlights">
          <ul>
            <li>
              <strong>
                Fullstack Flex Web Development Certificate, UC Davis:{" "}
              </strong>
              Projected Graduation in December 2022
            </li>
            <li>
              <strong>MA in English, San Francisco State University: </strong>
              December 2017
            </li>
            <li>
              <strong>
                MFA in Creative Writing, San Francisco State University:{" "}
              </strong>
              May 2018
            </li>
          </ul>
        </div>
      </div>
      <p>Downloadable resume available here: {ResumeDoc}</p>
      <p>Please contact me directly with any questions!</p>
    </section>
  );
}

export default Resume;
