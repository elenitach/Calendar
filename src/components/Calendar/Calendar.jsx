import { useState } from "react";
import { addDays } from "../../helpers/helpers";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Calendar = ({ events, onEventDelete }) => {
  const [date] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const weekDayIndex = (date.getDay() + 6) % 7;
  const [firstWeekDate, setFirstWeekDate] = useState(addDays(date, -weekDayIndex));
  const currentWeekDates = [];

  const handleEventDelete = () => {
    onEventDelete(selectedEvent);
    setSelectedEvent(null);
  }

  const setPreviousWeek = () => {
    setFirstWeekDate(addDays(firstWeekDate, -7));
  }

  const setNextWeek = () => {
    setFirstWeekDate(addDays(firstWeekDate, 7));
  }

  for (let i = 0; i < 7; i++) {
    currentWeekDates.push(addDays(firstWeekDate, i));
  }

  return (
    <div>
      <Header 
        date={date} 
        currentWeekDates={currentWeekDates} 
        setPreviousWeek={setPreviousWeek}
        setNextWeek={setNextWeek}
      />
      <Main 
        date={date} 
        events={events} 
        currentWeekDates={currentWeekDates}
        selectedEvent={selectedEvent}
        onEventSelect={(event) => setSelectedEvent(event)}
      />
      <Footer 
        selectedEvent={selectedEvent} 
        onEventDelete={handleEventDelete} 
        onTodayClick={() => setFirstWeekDate(addDays(date, -weekDayIndex))}
      />
    </div>
  );
  
}

export default Calendar;