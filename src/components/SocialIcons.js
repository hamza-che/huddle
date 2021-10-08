import React from "react";
import StyledSocialIcons from "./styled/SocialIcons.styled";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}

export default SocialIcons;
