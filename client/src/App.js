/* React imported */
import React from "react";
/* main cartoon picture of me imported */
import Logo from "./assets/Untitled_Artwork 5.png";
/* css file imported */
import "./main css/App.css";
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
    <div>
      <div id="background"></div>
      <div className="App">
        <NavBar/>
        {/* header holds NavBar, Full name, main title, short description, main logo img, animated mouse icon & Footer */}
        <header id="header" name="header">
          {/* main logo img */}

          <div id="bCard">
            <h1 id="fullName">S A M - L A C H A P E L L E</h1>
            <h2 id="mainTitle">FULL STACK SOFTWARE DEVELOPER</h2>
            <img id="head-img" src={Logo} alt="Cartoon Sam" />
            <p id="mainDesc">A PASSIONATE PERSONABLE CREATIVE DRIVEN NERD</p>
            <h2>
              <a href="mailto:sambosauce@gmail.com">
                <img
                  className="social"
                  id="mail"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAzdjE4aDI0di0xOGgtMjR6bTYuNjIzIDcuOTI5bC00LjYyMyA1LjcxMnYtOS40NThsNC42MjMgMy43NDZ6bS00LjE0MS01LjkyOWgxOS4wMzVsLTkuNTE3IDcuNzEzLTkuNTE4LTcuNzEzem01LjY5NCA3LjE4OGwzLjgyNCAzLjA5OSAzLjgzLTMuMTA0IDUuNjEyIDYuODE3aC0xOC43NzlsNS41MTMtNi44MTJ6bTkuMjA4LTEuMjY0bDQuNjE2LTMuNzQxdjkuMzQ4bC00LjYxNi01LjYwN3oiLz48L3N2Zz4="
                />
              </a>
              <a href="https://www.linkedin.com/in/samuel-lachapelle-050a4b196/">
                <img
                  className="social"
                  id="linkedin"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0tMiA4YzAgLjU1Ny0uNDQ3IDEuMDA4LTEgMS4wMDhzLTEtLjQ1LTEtMS4wMDhjMC0uNTU3LjQ0Ny0xLjAwOCAxLTEuMDA4czEgLjQ1MiAxIDEuMDA4em0wIDJoLTJ2Nmgydi02em0zIDBoLTJ2Nmgydi0yLjg2MWMwLTEuNzIyIDIuMDAyLTEuODgxIDIuMDAyIDB2Mi44NjFoMS45OTh2LTMuMzU5YzAtMy4yODQtMy4xMjgtMy4xNjQtNC0xLjU0OHYtMS4wOTN6Ii8+PC9zdmc+"
                />
              </a>
              <a href="https://www.instagram.com/sambo_sauce/">
                <img
                  className="social"
                  id="instagram"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6bTAtMi4xNjNjLTMuMjU5IDAtMy42NjcuMDE0LTQuOTQ3LjA3Mi00LjM1OC4yLTYuNzggMi42MTgtNi45OCA2Ljk4LS4wNTkgMS4yODEtLjA3MyAxLjY4OS0uMDczIDQuOTQ4IDAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4IDEuMjgxLjA1OCAxLjY4OS4wNzIgNC45NDguMDcyIDMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0uMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEuMjguMDczLTEuNjg5LjA3My00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYuNzgtNi45NzktNi45OC0xLjI4MS0uMDU5LTEuNjktLjA3My00Ljk0OS0uMDczem0wIDUuODM4Yy0zLjQwMyAwLTYuMTYyIDIuNzU5LTYuMTYyIDYuMTYyczIuNzU5IDYuMTYzIDYuMTYyIDYuMTYzIDYuMTYyLTIuNzU5IDYuMTYyLTYuMTYzYzAtMy40MDMtMi43NTktNi4xNjItNi4xNjItNi4xNjJ6bTAgMTAuMTYyYy0yLjIwOSAwLTQtMS43OS00LTQgMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNGMwIDIuMjEtMS43OTEgNC00IDR6bTYuNDA2LTExLjg0NWMtLjc5NiAwLTEuNDQxLjY0NS0xLjQ0MSAxLjQ0cy42NDUgMS40NCAxLjQ0MSAxLjQ0Yy43OTUgMCAxLjQzOS0uNjQ1IDEuNDM5LTEuNDRzLS42NDQtMS40NC0xLjQzOS0xLjQ0eiIvPjwvc3ZnPg=="
                />
              </a>
            </h2>
          </div>
          {/* animated mouse icon */}
          <div id="mouse">
            <div id="mouse-icon">
              <span id="mouse-wheel"></span>
            </div>
          </div>
        </header>
        {/* body holds Projects, Work, About & Contact Form components */}
        <div id="homeBody">
          <Projects name="projects"/>
          <Work />
          <About />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}
/* exported App function */
export default App;
