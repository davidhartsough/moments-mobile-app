import React from "react";
import qs from "query-string";
import { useHistory } from "react-router-native";
import { DataTable } from "react-native-paper";

export default function ListItem({ name, count, type }) {
  const history = useHistory();
  function onPress() {
    history.push(`/moments?${qs.stringify({ type, q: name })}`);
  }
  return (
    <DataTable.Row onPress={onPress}>
      <DataTable.Cell>{name}</DataTable.Cell>
      <DataTable.Cell numeric>{count}</DataTable.Cell>
    </DataTable.Row>
  );
}
