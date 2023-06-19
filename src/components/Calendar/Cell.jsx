import styled from "styled-components";

const StyledCell = styled.td`
  height: 70px;
  padding: 3px;
  border: 2px solid var(--border-color);
  ${props => props.lastRow && 'border-bottom: none'}
`;

const CellContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${
    props => props.variant === 'filled' ? 
    'var(--filled-cell-color)' : 
    'var(--selected-cell-color)'};
  ${props => props.variant && 'cursor: pointer'};
`;

const Cell = ({ variant, onClick, lastRow }) => {
  return (
    <StyledCell onClick={onClick} lastRow={lastRow}>
      {variant && <CellContent variant={variant} />}
    </StyledCell>
  );
}

export default Cell;