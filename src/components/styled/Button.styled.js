import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 60px;
  margin-left: auto;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};

  &:hover {
    opacity: 0.9;
    transform: scale(.98);
  }
`;
