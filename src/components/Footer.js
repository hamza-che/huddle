import React from "react";
import SocialIcons from "./SocialIcons";
import { Container } from "./styled/Container.styled";
import { StyledFooter } from "./styled/Footer.styled";
import Flex from "./styled/Flex.styled";
import Banner from "./Banner";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="huddle" />

        <Flex className="flexFooter">
          <ul className="info">
            <li>
              <img src="./images/icon-location.svg" alt="location" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              praesentium consequuntur ut quos recusandae id, maiores laborum
              consectetur mollitia repellat.
            </li>
            <li>
              <img src="./images/icon-phone.svg" alt="phone" />
              +1-543-546-7659
            </li>
            <li>
              <img src="./images/icon-email.svg" alt="email" />
              example@huddle.com
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">About We Do</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Carrer</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          {/* Social icons */}
          <SocialIcons />
        </Flex>
        <p>&copy; Copyrights 2021 Huddle. All rights reserved</p>
      </Container>
      <Banner />
    </StyledFooter>
  );
}

export default Footer;
