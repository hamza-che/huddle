import styled from "styled-components";

const StyledBanner = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  width: 50%;
  background-color: #fff;
  color: hsl(192, 100%, 9%);
  text-align: center;
  text-transform: capitalize;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);

  h2 {
    font-size: 1.7em;
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 85%;
    padding: 2rem 0.1rem;
    font-size: .9em;
  }
`;

export default StyledBanner;
