/* Imported React and useState */
import React, { useState } from "react";
/* main ContactForm function */
function ContactForm() {
  /* Three cases of useState with its respected property & setProperty from the three sections of the contact form */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /* handleSubmit function when submit button is clicked it prevents the default refresh and sets each section of the forms value to an empty string */
  function handleSubmit(evt) {
    evt.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    /* main div contains the contact form */
    <div id="contact-form" className="scrolling-box">
      {/* contact form section title */}
      <h1 id="contact-form-title">
        CONTACT FORM
        <div id="form-container">
          {/* the contact form */}
          <form id="form">
            {/* the name section of contact form */}
            <label className="form-titles">
              Name:
              {/* when the value of the input changes it updates itself */}
              <input
                type="text"
                value={name}
                onChange={(evt) => {
                  setName(evt.target.value);
                }}
              />
            </label>
            {/* the email section of contact form */}
            <label className="form-titles">
              Email:
              {/* when the value of the input changes it updates itself */}
              <input
                type="text"
                value={email}
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
              />
            </label>
            {/* the message section of contact form */}
            <label className="form-titles">
              Message:
              {/* when the value of the input changes it updates itself */}
              <input
                type="text"
                value={message}
                onChange={(evt) => {
                  setMessage(evt.target.value);
                }}
              />
            </label>
            {/* submit button section when clicked calls handleSubmit function */}
            <label id="submit-form">
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </label>
          </form>
        </div>
      </h1>
    </div>
  );
}
/* exported ContactForm function */
export default ContactForm;
