/* React imported */
import React from "react";
/* Imported email, linkden & instagram logo images */
import EmailLogo from "../assets/footer logos/email logo.png";
import LinkdenLogo from "../assets/footer logos/linkedin_black_logo_icon_147114.png";
import InstagramLogo from "../assets/footer logos/insta logo.png";
/* main Footer function */
function Footer() {
  return (
    /* main div holds copyright info, contact info and social media info */
    <div id="footer">
      <h5>SAM LACHAPELLE©2021 | Richmond, Virginia</h5>
      <h5 className="footer-info">
        Contact Me:
        {/* email image linked to mailto: which allows the user to create a draft and prepare an email to be sent to my personal email */}
        <a href="mailto:sambosauce@gmail.com">
          <img id="email-logo" src={EmailLogo} alt="email logo" />
        </a>
        {/* linkden image linked to my linkden account page */}
        <a href="https://www.linkedin.com/in/samuel-lachapelle-050a4b196/">
          <img id="linkden-logo" src={LinkdenLogo} alt="linkden logo" />
        </a>
      </h5>
      <h5 className="footer-info">
        Social Media:
        {/* instagram image linked to my instagram account page */}
        <a href="https://www.instagram.com/sambo_sauce/">
          <img id="instagram-logo" src={InstagramLogo} alt="instagram logo" />
        </a>
      </h5>
    </div>
  );
}
/* exported Footer function */
export default Footer;
