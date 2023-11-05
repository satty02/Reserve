
// Input date in the format YYYY-MM-DD HH:MM
const inputDate = "2023-11-05 12:30";

// Parse the input date and time
const [datePart, timePart] = inputDate.split(" ");
const [year, month, day] = datePart.split("-").map(Number);
const [hours, minutes] = timePart.split(":").map(Number);

// Create a new Date object with the parsed values
const date = new Date(year, month - 1, day, hours, minutes);

// Define an array of month names
const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Format the resulting date as "MMM DD, HH:MM"
const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

console.log(formattedDate);
