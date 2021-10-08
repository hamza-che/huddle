import styled from "styled-components";

const styledCard = styled.div`
  padding: 60px;
  margin: 40px 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  flex-direction: ${({ layout }) => layout || "row"};

  img {
    width: 80%;
    display: block;
    margin-left: ${({ imageMargin }) => imageMargin || "0"};
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
  }
`;

export default styledCard;
