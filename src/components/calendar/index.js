import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ScrollView, View, StyleSheet } from "react-native";
import MonthPicker from "./MonthPicker";
import MomentsByMonth from "./MomentsByMonth";
import { fetchMomentsByMonth } from "../../store/actions/moments";
import { currentMonth, currentYear } from "../../utils";

function CalendarMonth({ moments, getMoments }) {
  const [month, setMonth] = useState(`${currentYear}-${currentMonth}`);
  useEffect(() => {
    getMoments(month);
  }, [getMoments, month]);
  return (
    <ScrollView style={styles.container}>
      <MonthPicker updateMonth={setMonth} />
      <View style={styles.month}>
        <MomentsByMonth moments={moments} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10
  },
  month: {
    flex: 1,
    paddingBottom: 64
  }
});

const mapDispatchToProps = dispatch => ({
  getMoments: month => dispatch(fetchMomentsByMonth(month))
});

export default connect(
  ({ moments }) => ({ moments }),
  mapDispatchToProps
)(CalendarMonth);
