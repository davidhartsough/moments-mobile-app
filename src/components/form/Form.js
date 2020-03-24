import React, { useState } from "react";
import { connect } from "react-redux";
import { ScrollView, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import ScreenLoader from "../ScreenLoader";
import DatePicker from "./DatePicker";
import Label from "./Label";
import FormItem from "./FormItem";
import { getLocaleISOString, getInitialDate } from "../../utils";

const emptyMoment = {
  id: null,
  date: null,
  people: [],
  places: [],
  activities: []
};
const getOptions = ({ data }) => data.map(({ name }) => name);

function Form({
  onSave,
  initialMoment = emptyMoment,
  _people,
  _places,
  _activities
}) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(getInitialDate(initialMoment.date));
  const [people, setPeople] = useState(initialMoment.people || []);
  const [places, setPlaces] = useState(initialMoment.places || []);
  const [activities, setActivities] = useState(initialMoment.activities || []);
  if (_people.loading || _places.loading || _activities.loading) {
    return <ScreenLoader />;
  }
  function save() {
    setLoading(true);
    const { id } = initialMoment;
    const momentData = {
      date: getLocaleISOString(date, !!id),
      people,
      places,
      activities
    };
    const newMoment = id ? { id, ...momentData } : momentData;
    onSave(newMoment, initialMoment);
  }
  return (
    <ScrollView style={styles.container}>
      <Label text="Date" icon="calendar" />
      <DatePicker date={date} setDate={setDate} />
      <FormItem
        label="People"
        icon="account-multiple"
        options={getOptions(_people)}
        values={people}
        setValues={setPeople}
      />
      <FormItem
        label="Places"
        icon="map-marker"
        options={getOptions(_places)}
        values={places}
        setValues={setPlaces}
      />
      <FormItem
        label="Activities"
        icon="tag"
        options={getOptions(_activities)}
        values={activities}
        setValues={setActivities}
      />
      <FAB
        label="Save"
        icon="check"
        onPress={save}
        disabled={
          !date || (!people.length && !places.length && !activities.length)
        }
        style={styles.fab}
        loading={loading}
      />
    </ScrollView>
  );
}

const mapStateToProps = ({ people, places, activities }) => ({
  _people: people,
  _places: places,
  _activities: activities
});

export default connect(mapStateToProps)(Form);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 80
  },
  fab: {
    marginTop: 16,
    alignSelf: "center",
    marginBottom: 80
  }
});
