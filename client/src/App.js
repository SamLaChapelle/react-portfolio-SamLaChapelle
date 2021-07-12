/* React imported */
import React from "react";
/* main cartoon picture of me imported */
import Logo from "./assets/Untitled_Artwork 5.png";
/* css file imported */
import "./App.css";
/* ALL COMPONENTS IMPORTED */
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

/* main App function */
function App(props) {
/* returns entire page content */
  return (
    /* main div */
    <div className="App">
      {/* header holds NavBar, Full name, main title, short description, main logo img, animated mouse icon & Footer */}
      <header id="header">
        <NavBar />
        <h1 id="fullName">S A M | L A C H A P E L L E</h1>
        <h2 id="mainTitle">FULL STACK SOFTWARE DEVELOPER</h2>
        <h2>
          <p id="mainDesc">A PASSIONATE PERSONABLE CREATIVE DRIVEN NERD</p>
        </h2>
        {/* main logo img */}
        <img id="head-img" src={Logo} alt="Cartoon Sam" />
        {/* animated mouse icon */}
        <div id="mouse">
          <div id="mouse-icon">
            <span id="mouse-wheel"></span>
          </div>
        </div>
        <Footer />
      </header>
      {/* body holds Projects, Work, About & Contact Form components */}
      <body id="homeBody">
        <Projects />
        <Work />
        <About />
        <ContactForm />
      </body>
    </div>
  );
}
/* exported App function */
export default App;
