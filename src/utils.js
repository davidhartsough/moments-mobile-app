import { Platform } from "react-native";

const utcOptions = {
  timeZone: "UTC",
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric"
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
const utcOptionsLong = {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
};
const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export function formatDate(date) {
  if (Platform.OS === "android") {
    return `${weekdays[date.getUTCDay()]}, ${
      months[date.getUTCMonth()]
    } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  }
  return date.toLocaleDateString(undefined, utcOptions);
}
function formatDateLong(date) {
  if (Platform.OS === "android") {
    return `${weekdays[date.getUTCDay()]}, ${
      monthsLong[date.getUTCMonth()]
    } ${date.getUTCDate()}`;
  }
  return date.toLocaleDateString(undefined, utcOptionsLong);
}

const convertToSlashes = str => str.replace(/-/g, "/").replace(/T.+/, "");
const newDateFromISOString = str => new Date(convertToSlashes(str));

export const getDayString = d => formatDate(newDateFromISOString(d));
export const getDayStringLong = d => formatDateLong(newDateFromISOString(d));

// For getInitialDate
function getToday() {
  const d = new Date();
  const s = `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())}`;
  return new Date(s);
}

// For Form
export function getInitialDate(date) {
  return date ? newDateFromISOString(date) : getToday();
}

// For Calendar and MonthPicker
const date = new Date();
const currentMonthNumber = date.getMonth() + 1;
export const currentYear = date.getFullYear();
const pad = n => (n < 10 ? `0${n}` : n);
export const currentMonth = pad(currentMonthNumber);
const _monthOptions = months
  .slice(0, currentMonthNumber)
  .map((m, i) => ({
    value: `${currentYear}-${pad(i + 1)}`,
    label: `${m} ${currentYear}`
  }))
  .reverse();
for (let year = currentYear - 1; year >= 2019; year--) {
  for (let i = 11; i >= 0; i--) {
    _monthOptions.push({
      value: `${year}-${pad(i + 1)}`,
      label: `${months[i]} ${year}`
    });
  }
}
export const monthOptions = _monthOptions;
export const prevMonthBound = _monthOptions.length - 1;
