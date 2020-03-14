import React from "react";
import TabViewLayout from "../TabViewLayout";
import Fetcher from "../Fetcher";
import ListScreen from "./ListScreen";

export default function TabViewList(props) {
  return (
    <TabViewLayout title={props.title}>
      <Fetcher {...props}>
        <ListScreen {...props} />
      </Fetcher>
    </TabViewLayout>
  );
}
