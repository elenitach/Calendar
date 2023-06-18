import { useState } from "react";
import Header from "./Header";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Header date={date} onDateChange={date => setDate(date)} />
  );
  
}

export default Calendar;