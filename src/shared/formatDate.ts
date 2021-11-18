export const formatDate = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = months[now.getMonth()];
  const dayOfMonth = now.getDate();
  const minutes = now.getMinutes();
  const hours24 = now.getHours();
  const hours = hours24 > 12 ? hours24 % 12 : hours24;
  const amOrPm = hours24 > 12 ? "PM" : "AM";

  return `${dayOfWeek} ${month} ${dayOfMonth} ${hours}:${minutes} ${amOrPm}`;
};
