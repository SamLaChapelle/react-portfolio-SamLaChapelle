/* React imported */
import React from "react";
/* Imported Project images */
import ProjectOne from "../assets/project-sc/Screen Shot 2021-07-10 at 3.01.24 PM.png";
import ProjectTwo from "../assets/project-sc/Screen Shot 2021-07-10 at 2.54.35 PM.png";
import ProjectThree from "../assets/project-sc/Screen Shot 2021-07-10 at 2.55.22 PM.jpg";
/* Imported small sized github logo image */
import ProjectGitPic from "../assets/project-sc/GitHub-Mark-64px.png";
/* Imported large sized github logo image */
import GitHubLogo from "../assets/project-sc/GitHub-Mark-120px-plus.png";
/* Imported medium sized github name image */
import GitHubName from "../assets/project-sc/GitHub_Logo.png";
/* main Projects function */
function Projects(props) {
  return (
    /* main div holds each projects cell & github cell */
    <div id="projects">
      {/* project section title */}
      <h1 id="project-nav" className="body-titles">
        PROJECTS
      </h1>
      <div className="project-cells">
        <div id="project-one">
          {/* project one image */}
          <img
            className="project-sc"
            src={ProjectOne}
            alt="Guess the number project"
          />
          {/* project one description */}
          <p className="project-desc">
            Guess The Number was created in a Node.js environment using VS Code
            text editor. When the file is ran in the terminal, you are prompted
            with the game description. You can either play the normal version
            where the computer tries to guess your number or the reverse version
            where you are trying to guess the computers number. Check out the
            code on GitHub below.
          </p>
          <h3 className="project-titles">GUESS THE NUMBER</h3>
          {/* small github logo image linked to project one's repository */}
          <a
            className="project-links"
            href="https://github.com/burlingtoncodeacademy-students/guess-the-number-SamLaChapelle"
          >
            <img
              className="project-github"
              src={ProjectGitPic}
              alt="Git Hub logo linked to Guess the number project repository"
            />
            CLICK ME
          </a>
        </div>
        {/* project two image */}
        <div id="project-two">
          <img
            className="project-sc"
            src={ProjectTwo}
            alt="Zorkington project"
          />
          {/* project two description */}
          <p className="project-desc">
            Zorkington is an escape room style text adventure that was created
            in a Node.js environment using VS Code text editor. When the file is
            ran in the terminal, you are prompted with the game description.
            Inside the game you can pick up, drop, use and interact with items.
            As well as move from room to room finding clues and trying to escape
            and beat the game!
          </p>
          <h3 className="project-titles">Zorkington</h3>
          {/* small github logo image linked to project two's repository */}
          <a
            className="project-links"
            href="https://github.com/burlingtoncodeacademy-students/zorkington-SamLaChapelle"
          >
            <img
              className="project-github"
              src={ProjectGitPic}
              alt="Git Hub logo linked to Zorkington project repository"
            />
            CLICK ME
          </a>
        </div>
        {/* project three image */}
        <div id="project-three">
          <img
            id="project-three-sc"
            className="project-sc"
            src={ProjectThree}
            alt="Tic Tac Toe project"
          />
          {/* project three description */}
          <p className="project-desc">
            Tic Tac Toe is exactly what you think it is... This project was
            split in to two parts and created inside the DOM using VS Code text
            editor. The first part was creating the website itself through HTML
            and CSS. The second part was the actual game itself which was
            created in the DOM in JavaScript. You can play versus the computer
            or with a friend!
          </p>
          <h3 className="project-titles">Tic Tac Toe</h3>
          {/* small github logo image linked to project three's repository */}
          <a
            className="project-links"
            href="https://github.com/burlingtoncodeacademy-students/tic-tac-toe-SamLaChapelle"
          >
            <img
              className="project-github"
              src={ProjectGitPic}
              alt="Git Hub logo linked to Tic Tac Toe project repository"
            />
            CLICK ME
          </a>
        </div>
        <div id="git-hub-cell">
          {/* large github logo and name image */}
          <img id="github-logo" src={GitHubLogo} alt="Git Hub logo" />
          <img id="github-name" src={GitHubName} alt="Git Hub" />
          {/* github account name linked to personal github account */}
          <a
            className="project-links"
            href="https://github.com/SamLaChapelle/samgithub-repo"
          >
            <h3 id="personal-github" className="project-titles">
              SamLaChapelle
            </h3>
            <p id="under-personal-github">Personal GitHub Account</p>
          </a>
          {/* list of github repositories */}
          <div id="github-list">
            Click a project name to go to it's repository
            <ul>
              {/* project one linked to its repository */}
              <a
                className="project-links"
                href="https://github.com/burlingtoncodeacademy-students/guess-the-number-SamLaChapelle"
              >
                <li>Guess The Number</li>
              </a>
              {/* project two linked to its repository */}
              <a
                className="project-links"
                href="https://github.com/burlingtoncodeacademy-students/zorkington-SamLaChapelle"
              >
                <li>Zorkington</li>
              </a>
              {/* project three linked to its repository */}
              <a
                className="project-links"
                href="https://github.com/burlingtoncodeacademy-students/tic-tac-toe-SamLaChapelle"
              >
                <li>Tic Tac Toe</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
/* exported Projects function */
export default Projects;
