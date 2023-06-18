import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import { addDays } from "../../helpers";

const Calendar = ({ events }) => {
  const [date] = useState(new Date());
  const weekDayIndex = (date.getDay() + 6) % 7;
  const [firstWeekDate, setFirstWeekDate] = useState(addDays(date, -weekDayIndex));
  const currentWeekDates = [];

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
      />
    </div>
  );
  
}

export default Calendar;