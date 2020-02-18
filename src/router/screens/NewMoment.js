import React from "react";
import { View, Text } from "react-native";
import { Appbar, FAB } from "react-native-paper";
import { useHistory } from "react-router-native";

export default function NewMoment() {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="New Moment" />
      </Appbar.Header>
      <View>
        <Text>Create a new moment</Text>
        <FAB label="Save" icon="check" onPress={goBack} />
      </View>
    </View>
  );
}
