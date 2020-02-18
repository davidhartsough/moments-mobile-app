import React from "react";
import { View, Text } from "react-native";
import { Appbar, FAB } from "react-native-paper";
import { useHistory, useParams } from "react-router-native";

export default function EditMoment() {
  const { id } = useParams();
  const history = useHistory();
  const goBack = () => history.goBack();
  if (id === null) goBack();
  function onSave(updatedMoment) {
    updateMoment(updatedMoment).then(() => goBack());
  }
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Edit Moment" />
      </Appbar.Header>
      <View>
        <Text>Edit a moment</Text>
        <FAB label="Save" icon="check" onPress={goBack} />
      </View>
    </View>
  );
}
