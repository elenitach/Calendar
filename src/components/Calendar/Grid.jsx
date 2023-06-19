import styled from "styled-components";
import Cell from "./Cell";

const StyledGrid = styled.table`
  width: 100%;
  margin-top: 18px;
  border-collapse: collapse;
`;

const Grid = ({ events, currentWeekDates, selectedEvent, onEventSelect }) => {
  const rows = [];
  const rowsCount = 24;
  const columnsCount = 7;

  const cellEvent = (rowIdx, colIdx) => {
    const date = currentWeekDates[colIdx];
    for (const event of events) {
      if (
        event.getDate() === date.getDate() &&
        event.getMonth() === date.getMonth() &&
        event.getFullYear() === date.getFullYear() &&
        event.getHours() === rowIdx
      ) {
        return event;
      }
    }
    return null;
  }

  for (let i = 0; i < rowsCount; i++) {
    const row = [];
    for (let j = 0; j < columnsCount; j++) {
      const event = cellEvent(i, j);
      let variant;
      if (event) {
        if (event === selectedEvent) {
          variant = 'selected';
        } else {
          variant = 'filled';
        }
      }
      row.push(
        <Cell 
          key={i * rowsCount + j} 
          variant={variant} 
          onClick={() => onEventSelect(event)}
          lastRow={i === rowsCount - 1}
        />
      );
    }
    rows.push(<tr>{row}</tr>);
  }
  return (
    <StyledGrid>
      {rows}
    </StyledGrid>
  );
}

export default Grid;