import React from "react";
import TabViewLayout from "../../../components/TabViewLayout";
import CalendarMonth from "../../../components/calendar/";
import ActionButton from "../../../components/calendar/ActionButton";

export default function Calendar() {
  return (
    <TabViewLayout title="Moments">
      <CalendarMonth />
      <ActionButton />
    </TabViewLayout>
  );
}
