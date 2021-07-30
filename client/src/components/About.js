/* React imported */
import React from "react";
/* main About function */
function About() {
  return (
    /* main div containing two about cells */
    <div>
      {/* main About section title */}
      <h1 id="about-title" className="body-titles">
        ABOUT ME
      </h1>
      {/* About cell one containing a summary of where i am from, how i grew up, my interests and how i got to be where i am today */}
      <div className="about-cells">
        <div id="about-one">
          <p id="about-blurb">
            I was born and raised in Boca Raton, Florida. As a true Floridian
            the beach is my home and my body craves sun light. As a kid I was
            neck deep in Golf and Basketball playing year round. Without knowing
            the next chapter of my life was about to begin, I spent the next
            part of my life from age 11 to now in Richmond, Virginia. Throughout
            middle school and high school i developed a huge interest in
            entertainment. From creating dance videos to video game tutorials I
            loved to film. Along with those interests my first encounter with
            coding was in highschool. I enrolled in a programming class where we
            learned basic HTML. I was always interested in how phones and
            websites worked behind the scenes. While spending 2 years at
            Virginia Commonwealth University I found that my time and money were
            not spent well there. For the past year I have been working and
            trying to figure out my life and what I should do with it. I came to
            the conclusion that I wanted to become a Full Stack Software
            Developer. I aspire to build my own brand "SAMBO SAUCE". I do not
            know what this brand will become but thats the exciting part. I have
            many interests and skills that will be incorporated one way or
            another.
          </p>
        </div>
        {/* About cell two containing a list of my hobbies and interests */}
        <div id="about-two">
          <div id="hobbies">
            <h3>HOBBIES / INTERESTS</h3>
            <p>Content Creation - I Movie | Final Cut Pro</p>
            <p>Graphic Design - Procreate | InkScape</p>
            <p>Video Games - XBOX | Rocket League | Call of Duty</p>
            <p>Sports - Basketball | Golf | Dancing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
/* exported About function */
export default About;
