import styled from "styled-components";

const StyledSocialIcons = styled.ul`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;

  a {
    width: 40px;
    height: 40px;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 50%;
    &:hover {
      color: #ff0099;
      border-color: #ff0099;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export default StyledSocialIcons;
