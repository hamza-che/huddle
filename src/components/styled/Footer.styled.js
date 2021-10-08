import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 10rem 0 2rem;
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.body};
  font-size: .99rem;
  position: relative;

  ul {
    margin-top: 3rem;
    margin-right: 3rem;

    &:first-of-type {
      flex-basis: 30%;
    }

    li {
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    &.info {
      li {
        display: flex;
        img {
          height: 20px;
          margin-right: 1.5rem;
        }
      }
    }
  }

  p {
    opacity: 1;
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    ul {
      margin-right: auto;
    }
    p {
      text-align: center;
    }
  }
`;
