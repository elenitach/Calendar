export const weekDays = ['m', 't', 'w', 't', 'f', 's', 's'];

export const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
]

export const millisecondsPerDay = 24 * 3600 * 1000;

export const addDays = (date, daysCount) => {
  return new Date(date.getTime() + daysCount * millisecondsPerDay);
}

export const parseDateString = (dateString) => {
  if (!dateString) return null;
  const timestamp = Date.parse(dateString.replace(' ', 'T'));
  if (isNaN(timestamp)) {
    return null;
  }
  return new Date(timestamp);
}