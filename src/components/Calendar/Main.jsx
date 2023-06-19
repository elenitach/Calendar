import styled from "styled-components";
import Grid from "./Grid";

const StyledMain = styled.div`
  display: flex;
  height: calc(100vh - 390px);
  overflow: auto;
  scrollbar-width: none;
`;

const Labels = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 46px;
  margin: 5px;
  color: var(--text-secondary-color);
  font-size: 1.3rem;
`;

const Main = ({ events, currentWeekDates, selectedEvent, onEventSelect }) => {
  return (
    <StyledMain>
      <Labels>
        {
          Array.from(new Array(24).keys()).map((index) => {
            return <div>{`${index > 9 ? index : '0' + index}:00`}</div>;
          })
        }
      </Labels>
      <Grid 
        events={events} 
        currentWeekDates={currentWeekDates} 
        selectedEvent={selectedEvent}
        onEventSelect={onEventSelect}
      />
    </StyledMain>
  );
}

export default Main;