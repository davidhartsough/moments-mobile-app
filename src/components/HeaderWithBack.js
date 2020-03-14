import React from "react";
import { Appbar } from "react-native-paper";
import { useHistory } from "react-router-native";

export default function HeaderWithBack({ title }) {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
