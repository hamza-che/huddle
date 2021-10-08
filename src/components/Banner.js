import React from "react";
import StyledBanner from "./styled/Banner.styled";
import { Button } from "./styled/Button.styled";

function Banner() {
  return (
    <StyledBanner>
      <h2>ready to buil your community?</h2>
      <Button bg="#ff0099" color="#fff">
        Get Started For Free
      </Button>
    </StyledBanner>
  );
}

export default Banner;
