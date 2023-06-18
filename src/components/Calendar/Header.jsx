import Week from "./Week";
import Day from "./Day";
import styled from "styled-components";
import Button from "../Button";
import { months, weekDays } from "../../helpers";

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


const Header = ({ date, currentWeekDates, setPreviousWeek, setNextWeek }) => {

  const currentWeekMonthDays = currentWeekDates.map(cwd => cwd.getDate());

  const days = weekDays.map(
    (wd, index) => 
    <Day 
      key={index}
      weekDay={wd} 
      monthDay={currentWeekMonthDays[index]} 
      isActive={date.getTime() === currentWeekDates[index].getTime()}
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