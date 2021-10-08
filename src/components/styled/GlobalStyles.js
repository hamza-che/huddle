import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'poppins', sans-serif;
    font-size: 1.15rem;
    margin: 0;
  }

  p {
    opacity: .6;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      margin: 0;
    }
  }

  img {
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyle;
