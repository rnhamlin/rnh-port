import React, { useState } from "react";

// Variable for error message
function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(event) {
    console.dir(event.target.value);
    // if event (!value="")
    if (event.target.value === "") {
      console.log("I need to throw an error");
      setErrorMessage("All fields are required.");
    } else {
      setErrorMessage("");
    }
  }

  // Contact form content.
  // Include error message variable via a ternary
  return (
    <section>
      <h2>Contact</h2>
      <br />
      <div className="formparent">
        <p>I would love to hear from you!</p>
        {errorMessage !== "" ? <h3>{errorMessage}</h3> : <></>}
        <form className="contactform">
          <label>Name:</label>
          <input onBlur={handleChange} className="form-input" type="text" />
          <label>Email Address:</label>
          <input onBlur={handleChange} className="form-input" type="text" />
          <label>Message:</label>
          <textarea onBlur={handleChange} className="form-input" type="text" />
          <button>Send email!</button>
        </form>
      </div>
    </section>
  );
}

// Export Contact component
export default Contact;
