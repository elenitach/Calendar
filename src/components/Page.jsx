import styled from 'styled-components';
import Button from './Button';
import Calendar from './Calendar/Calendar';
import { useState } from 'react';
import { parseDateString } from '../helpers';
import { data } from '../data';

const StyledPage = styled.div`
  @media (min-width: 740px) {
    width: 740px;
  }
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: normal;
`;

const Page = () => {
  const [events, setEvents] = useState(data);
  const handleAddEventClick = () => {
    const dateString = prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss');
    const event = parseDateString(dateString);
    if (event) {
      setEvents([event, ...events.filter(
        e => (
          !(
            e.getHours() === event.getHours() &&
            e.getDate() === event.getDate() &&
            e.getMonth() === event.getMonth() &&
            e.getFullYear() === event.getFullYear()
          )
        )
      )]);
    } else {
      alert('Incorrect date format');
    }
  }

  const handleEventDelete = (event) => {
    setEvents(events.filter(e => e !== event));
  }

  return (
    <StyledPage>
      <Header>
        <Title>Interview Calendar</Title>
        <Button variant='add' onClick={handleAddEventClick} />
      </Header>
      <Calendar events={events} onEventDelete={handleEventDelete} />
    </StyledPage>
  );
}

export default Page;