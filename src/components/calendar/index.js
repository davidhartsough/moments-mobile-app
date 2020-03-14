import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ScrollView, View, StyleSheet } from "react-native";
import MonthPicker from "./MonthPicker";
import MomentsByMonth from "./MomentsByMonth";
import { fetchMomentsByMonth } from "../../store/actions/moments";

const date = new Date();
const monthNum = date.getMonth() + 1;
const currentMonth = monthNum < 10 ? `0${monthNum}` : monthNum;
const currentYear = date.getFullYear();

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
