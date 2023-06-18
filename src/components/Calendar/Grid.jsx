import styled from "styled-components";
import Cell from "./Cell";

const StyledGrid = styled.table`
  width: 100%;
  margin-top: 18px;
  border-collapse: collapse;
`;

const Grid = ({ events, currentWeekDates }) => {
  const rows = [];
  const rowsCount = 24;
  const columnsCount = 7;

  const hasEvent = (rowIdx, colIdx) => {
    const date = currentWeekDates[colIdx];
    for (const event of events) {
      if (
        event.getDate() === date.getDate() &&
        event.getMonth() === date.getMonth() &&
        event.getFullYear() === date.getFullYear() &&
        event.getHours() === rowIdx
      ) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < rowsCount; i++) {
    const row = [];
    for (let j = 0; j < columnsCount; j++) {
      row.push(
        <Cell key={i * rowsCount + j} variant={hasEvent(i, j) ? 'filled' : ''} />
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