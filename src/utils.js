import { Platform } from "react-native";

const options = {
  timeZone: "UTC",
  weekday: "long",
  month: "short",
  day: "numeric"
};
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
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
  "Dec"
];

export function formatDate(date) {
  if (Platform.OS === "android") {
    return `${weekdays[date.getUTCDay()]}, ${
      months[date.getUTCMonth()]
    } ${date.getUTCDate()}`;
  }
  return date.toLocaleDateString(undefined, options);
}

export function getDayString(date) {
  return formatDate(new Date(date));
}
