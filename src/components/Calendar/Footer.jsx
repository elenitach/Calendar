import styled from "styled-components";
import Button from "../Button";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
  background-color: var(--section-color);
  border-top: 2px solid var(--border-color);
`;

const Footer = ({ selectedEvent, onEventDelete, onTodayClick }) => {
  return (
    <StyledFooter>
      <Button onClick={onTodayClick}>Today</Button>
      {selectedEvent && <Button onClick={onEventDelete}>Delete</Button>}
    </StyledFooter>
  );
}

export default Footer;