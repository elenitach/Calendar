import styled from "styled-components";

const StyledWeek = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Week = ({ children }) => {
  return (
    <StyledWeek>{children}</StyledWeek>
  );
}

export default Week;