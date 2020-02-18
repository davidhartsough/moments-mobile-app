import React from "react";
import { Appbar } from "react-native-paper";
import { useHistory } from "react-router-native";

export default function TabViewHeader({ title }) {
  const history = useHistory();
  const goToAccount = () => history.push("/account");
  return (
    <Appbar.Header>
      <Appbar.Content title={`Amazing ${title}`} />
      <Appbar.Action icon="account" onPress={goToAccount} />
    </Appbar.Header>
  );
}
