import styled from "styled-components";

export const StyledPage = styled.div`
  @media (min-width: 740px) {
    width: 740px;
  }
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: normal;
`;
