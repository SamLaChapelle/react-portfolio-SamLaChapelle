/* React imported */
import React from "react";
/* main NavBar function */
function NavBar() {
  return (
    /* main div holds all linked titles to their appropriate sections of the page */
    <div id="navBar">
      <h3>
        <a className="nav-links" href="/#header">
          HOME
        </a>
      </h3>
      <h3>
        <a className="nav-links" href="/#project-nav">
          PROJECTS
        </a>
      </h3>
      <h3>
        <a className="nav-links" href="/#work-title">
          WORK HISTORY
        </a>
      </h3>
      <h3>
        <a className="nav-links" href="/#about-title">
          ABOUT ME | HOBBIES & INTERESTS
        </a>
      </h3>
      <h3>
        <a className="nav-links" href="/#contact-form">
          CONTACT
        </a>
      </h3>
    </div>
  );
}
/* exported NavBar function */
export default NavBar;
