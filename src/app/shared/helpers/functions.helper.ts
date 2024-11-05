export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', 
    day: '2-digit',
    year: 'numeric'
  })?.format(date);
};

export const padWithZero = (number: number) => {
  return number.toString().padStart(2, "0");
}

export const getPreviousAndCurrentDate = (): string => {
  const currentDate: Date = new Date();
  const previousDate: Date = new Date();
  previousDate.setMonth(currentDate.getMonth() - 1); 

  const options: Intl.DateTimeFormatOptions = { month: "short", day: "2-digit", year: "numeric" };
  const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat("en-US", options);

  const formattedCurrentDate: string = dateFormatter.format(currentDate);
  const formattedPreviousDate: string = dateFormatter.format(previousDate);

  return `${formattedPreviousDate} - ${formattedCurrentDate}`;
}