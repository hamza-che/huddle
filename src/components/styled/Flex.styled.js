import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;

  &.flexFooter {
    align-items: flex-start;
  }

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
  }
`;

export default Flex;
