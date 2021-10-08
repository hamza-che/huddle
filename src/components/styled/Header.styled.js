import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    & > div {
      div {
        text-align: center;
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    & > * {
      width: 40%;
    }
    button {
      padding: 15px 0;
    }
  }
`;

export const Logo = styled.img``;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 4rem 0 3rem;
  }
`;
