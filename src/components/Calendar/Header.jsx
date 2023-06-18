import Week from "./Week";
import Day from "./Day";
import styled from "styled-components";
import Button from "../Button";

const StyledHeader = styled.header`
  padding: 20px 33px 20px 102px;
  background-color: var(--section-color);
  border-top: 2px solid var(--border-color);
  border-bottom: 2px solid var(--border-color);
`;

const Month = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 8px 0 10px;
  font-size: 1.3rem;
`;

const weekDays = ['m', 't', 'w', 't', 'f', 's', 's'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
]
const millisecondsPerDay = 24 * 3600 * 1000;

const Header = ({ date, onDateChange }) => {

  const addDays = (date, daysCount) => {
    return new Date(date.getTime() + daysCount * millisecondsPerDay);
  }

  const handleDateChange = (nextWeekDayIndex) => {
    onDateChange(addDays(date, nextWeekDayIndex - weekDayIndex));
  }

  const setPreviousWeek = () => {
    onDateChange(addDays(date, -7));
  }

  const setNextWeek = () => {
    onDateChange(addDays(date, 7));
  }

  const monthDay = date.getDate();
  const currentWeekDates = [];
  const weekDayIndex = (date.getDay() + 6) % 7;
  const firstWeekDate = addDays(date, -weekDayIndex);

  for (let i = 0; i < 7; i++) {
    currentWeekDates.push(addDays(firstWeekDate, i));
  }

  const currentWeekMonthDays = currentWeekDates.map(cwd => cwd.getDate());

  const days = weekDays.map(
    (wd, index) => 
    <Day 
      key={index}
      weekDay={wd} 
      monthDay={currentWeekMonthDays[index]} 
      isActive={monthDay === currentWeekMonthDays[index]}
      onDateChange={() => handleDateChange(index)}
    />
  );

  return (
    <StyledHeader>
      <Week>
        {days}
      </Week>
      <Month>
        <Button variant='arrow-left' onClick={setPreviousWeek} />
        <div>
          {months[currentWeekDates.at(-1).getMonth()]} {currentWeekDates.at(-1).getFullYear()}
        </div>
        <Button variant='arrow-right' onClick={setNextWeek} />
      </Month>
    </StyledHeader>
  );
}

export default Header;