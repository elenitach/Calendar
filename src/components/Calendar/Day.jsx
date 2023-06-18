import styled from "styled-components";

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
`;

const WeekDay = styled.div`
  text-transform: uppercase;
`;

const MonthDay = styled.div`
  width: 38px;
  padding: 5px;
  border-radius: 100%;
  font-size: 1.5rem;
  text-align: center;
`;

const MonthDayActive = styled(MonthDay)`
  background-color: var(--active-color);
  color: white;
`;

const Day = ({ weekDay, monthDay, isActive }) => {
  return (
    <StyledDay>
      <WeekDay>{weekDay}</WeekDay>
      {
        isActive ? 
        <MonthDayActive>{monthDay}</MonthDayActive> : 
        <MonthDay>{monthDay}</MonthDay>
      }
    </StyledDay>
  );
}

export default Day;