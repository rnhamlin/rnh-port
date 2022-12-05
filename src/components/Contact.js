import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <br />
      <p>I would love to hear from you!</p>
      <form class="contactform">
        <label>
          Name: 
          <input type="text" />
        </label>
        <label>
          Email Address: 
          <input type="text"/>
        </label>
        <label>
          Message: 
          <input type="text"/>
        </label>
      </form>
    </section>
  );
}

export default Contact;
