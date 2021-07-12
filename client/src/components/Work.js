/* React imported */
import React from "react";
/* Imported picture of resume */
import ResumePic from "../assets/Screen Shot 2021-07-10 at 8.56.39 PM.png";
/* main Work function */
function Work() {
  return (
    /* main div holds clickable/download of resume picture & Three work cells */
    <div>
      {/* work section title */}
      <h1 id="work-title" class="body-titles">
        WORK
      </h1>
      <div class="work-cells">
        {/* text informing user they can click the resume picture to download it & resume picture linked to the resume file with download feature */}
        <h3 id="resume-download">Click Image To Download</h3>
        <div id="work-one">
          <a
            href="/assets/Sam LaChapelle Resume Draft 20210702(1).docx"
            download
          >
            <img id="resume-sc" src={ResumePic} alt="Sam's Resume" />
          </a>
        </div>
        {/* Three work cells */}
        <div id="work-two">
          <p class="work-desc">
            <div class="work-text">
              {/* career goals cell containing a paragraph of my goals */}
              <h3 class="work-text-titles">Career Goals:</h3>I am very excited
              to start my career in the tech industry. As a creative big picture
              thinker my current goal is to get hired working a full time
              position in front end development. Being very personable I see
              myself working very well on team projects and keeping the
              communication clear and precise for maximum efficiency/work flow.
              Within the next five years gaining more knowledge and experience I
              will have side projects of my own to keep my skills sharp building
              and creating my own brand.
            </div>
          </p>
          <p class="work-desc">
            <div class="work-text">
              {/* prior employers cell containing a list of all of my prior employers */}
              <h3 class="work-text-titles">Prior Employers:</h3>
              <ul>
                <li>
                  The First Tee of Greater Richmond (Chapter) Richmond, VA Nov
                  2020 – Present
                </li>
                <li>
                  Jewish Community Center Water Safety Instructor Nov 2019 – Jul
                  2020
                </li>
                <li>
                  Towne Park, Omni Richmond Hotel Valet Aug 2018 – May 2019
                </li>
                <li>Marty’s Grill Jun 2018 – Aug 2018 </li>
                <li>Tropical Smoothie Café Crew Member Jun 2017 – Jun 2018</li>
                <li>Texas Roadhouse Server Assistant Aug 2015 – Jan 2017</li>
              </ul>
            </div>
          </p>
          <p class="work-desc">
            <div class="work-text">
              {/* Skills & Experience cell containing a list of my skills and experience */}
              <h3 class="work-text-titles">Skills & Experience:</h3>
              <ul>
                <li>Languages - JavaScript | CSS | HTML | Command Line</li>
                <li>Frameworks - WebAPI | React | Node.js</li>
                <li>Database - MongoDB</li>
                <li>Source Control - Git | GitHub</li>
                <li>Text-editing - Visual Studio Code</li>
                <li>
                  Creative - Procreate | iMovie | Final Cut Pro | Inkscape
                </li>
                <li>
                  Education/Certifications - Full Stack Web Developer (480+
                  hours) Burlington Code Academy | Coursework: Creative
                  Advertising Virginia Commonwealth University (VCU) 2017 – 2019
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
/* exported Work function */
export default Work;
