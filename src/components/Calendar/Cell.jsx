import styled from "styled-components";

const StyledCell = styled.td`
  min-width: 80px;
  height: 70px;
  padding: 3px;
  border: 2px solid var(--border-color);
`;

const CellContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${
    props => props.variant === 'filled' ? 
    'var(--filled-cell-color)' : 
    'var(--selected-cell-color)'}
`;

const Cell = ({ variant }) => {
  return (
    <StyledCell>{variant && <CellContent variant={variant} />}</StyledCell>
  );
}

export default Cell;