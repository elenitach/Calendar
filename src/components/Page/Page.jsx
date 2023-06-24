import { useState } from 'react';
import { parseDateString } from '../../helpers/helpers';
import { data } from '../../data/data';
import Button from '../Button/Button';
import Calendar from '../Calendar/Calendar';
import * as S from './styles';


const Page = () => {
  const [events, setEvents] = useState(data);
  const handleAddEventClick = () => {
    const dateString = prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss');
    if (!dateString) return;
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
    <S.StyledPage>
      <S.Header>
        <S.Title>Interview Calendar</S.Title>
        <Button variant='add' onClick={handleAddEventClick} />
      </S.Header>
      <Calendar events={events} onEventDelete={handleEventDelete} />
    </S.StyledPage>
  );
}

export default Page;