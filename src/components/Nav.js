//code to connect nav component to app.js
import React from "react";

//navigation bar contents
// This is how I can create my nav content without building it out using the more tedious/less DRY HTML in the function itself.
const categories = [
  {
    name: "Portfolio",
    description: "collection of projects to date",
  },
  {
    name: "Resume",
    description: "relevant work experience and education",
  },
];

//code to create nav bar
function Nav({ setCurrentPageprop }) {
  return (
    <header>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span onClick={() => setCurrentPageprop("About")}>About Me</span>
          </li>
          <li>
            <span onClick={() => setCurrentPageprop("Contact")}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => setCurrentPageprop(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

//connect Nav to the other components
export default Nav;
