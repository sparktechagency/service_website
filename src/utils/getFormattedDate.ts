

const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    day: "2-digit", 
    month: "long", 
    year: "numeric" 
  };
  return date.toLocaleDateString("en-GB", options);
};

export default getFormattedDate;