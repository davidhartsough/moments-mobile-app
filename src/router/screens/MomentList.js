import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import qs from "query-string";
import { fetchMomentsByQuery } from "../../store/actions/moments";
import ScreenLoader from "../../components/ScreenLoader";
import Moment from "../../components/Moment";
import HeaderWithBack from "../../components/HeaderWithBack";

function sortByDate(a, b) {
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
}

function List({ type, q, moments, getMoments }) {
  useEffect(() => {
    getMoments(q, type);
  }, [type, q, getMoments]);
  if (moments.loading) return <ScreenLoader />;
  if (moments.momentsByQuery.length < 1) {
    return (
      <Text style={styles.empty}>
        No moments found for the {type} named "{q}".
      </Text>
    );
  }
  const items = [...moments.momentsByQuery].sort(sortByDate);
  return (
    <ScrollView style={styles.listview}>
      <Text style={styles.heading}>
        {items.length} result{items.length > 1 && "s"} for: "{q}"
      </Text>
      {items.map(m => (
        <Moment key={m.id} moment={m} showDate={true} />
      ))}
    </ScrollView>
  );
}

const mapDispatchToProps = dispatch => ({
  getMoments: (query, type) => dispatch(fetchMomentsByQuery(query, type))
});

const MomentList = connect(
  ({ moments }) => ({ moments }),
  mapDispatchToProps
)(List);

export default function Page() {
  const history = useHistory();
  const query = qs.parse(history.location.search);
  return (
    <>
      <HeaderWithBack title="Moments" />
      <View style={styles.container}>
        {query.type === undefined || query.q === undefined ? (
          <Text style={styles.empty}>Sorry, no search results. Try again.</Text>
        ) : (
          <MomentList type={query.type} q={query.q} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    fontSize: 20
  },
  listview: {
    padding: 16
  },
  empty: {
    marginTop: 16,
    fontSize: 16,
    textAlign: "center"
  }
});
