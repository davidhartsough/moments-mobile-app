import { Platform } from "react-native";

const options = {
  timeZone: "UTC",
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric"
};
const localOptions = {
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
const optionsLong = {
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

function formatDateLocal(date) {
  if (Platform.OS === "android") {
    return `${weekdays[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }
  return date.toLocaleDateString(undefined, localOptions);
}

export function formatDate(date, utc = true) {
  if (!utc) return formatDateLocal(date);
  if (Platform.OS === "android") {
    return `${weekdays[date.getUTCDay()]}, ${
      months[date.getUTCMonth()]
    } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  }
  return date.toLocaleDateString(undefined, options);
}

export function getDayString(date) {
  return formatDate(new Date(date));
}

export function getDayStringLong(dateString) {
  const date = new Date(dateString);
  if (Platform.OS === "android") {
    return `${weekdays[date.getUTCDay()]}, ${
      monthsLong[date.getUTCMonth()]
    } ${date.getUTCDate()}`;
  }
  return date.toLocaleDateString(undefined, optionsLong);
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

// For Form
export const getLocaleISOString = (date, utc) => {
  if (utc || Platform.OS === "android") return date.toISOString().substr(0, 10);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
};

export const getInitialDate = date => {
  if (date) return new Date(date);
  return new Date(getLocaleISOString(new Date(), false));
};

// For DatePicker
export const convertAndroidDate = date => {
  return new Date(
    date
      .toISOString()
      .replace(/-/g, "/")
      .replace(/T.+/, "")
  );
};
