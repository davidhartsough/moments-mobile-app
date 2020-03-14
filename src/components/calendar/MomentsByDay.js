import React from "react";
import Day from "./Day";

export default function MomentsByDay({ moments }) {
  const days = {};
  moments.forEach(m => {
    if (Array.isArray(days[m.date])) {
      days[m.date].push(m);
    } else {
      days[m.date] = [m];
    }
  });
  return Object.entries(days).map(day => (
    <Day day={day[0]} key={day[0]} moments={day[1]} />
  ));
}
