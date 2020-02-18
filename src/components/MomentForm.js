import React, { useState, useEffect } from "react";
import ScreenLoader from "./ScreenLoader";

function Form() {
  const [date, setDate] = useState(today);
  const [people, setPeople] = useState(null);
  const [places, setPlaces] = useState(null);
  const [activities, setActivities] = useState(null);
  return (
    <View>
      <FAB
        label="Save"
        icon="check"
        onPress={save}
        disabled={!date || (!people && !places && !activities)}
      />
    </View>
  );
}

export default function MomentForm({ onSave, isEdit = false }) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {},[isEdit]);
  const goBack = () => history.goBack();
  const title = `${isEdit ? "Edit" : "New"} Moment`;
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title={title} />
      </Appbar.Header>
      <View>{isLoading ? <ScreenLoader /> : <Form />}</View>
    </View>
  );
}
