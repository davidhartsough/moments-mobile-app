import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useHistory } from "react-router-native";
import qs from "query-string";
import ScreenLoader from "../../components/ScreenLoader";
import { fetchMomentsByQuery } from "../../store/actions/moments";
import Moment from "../../components/Moment";

function sortByDate(a, b) {
  if (a.data().date > b.data().date) {
    return -1;
  } else if (a.data().date < b.data().date) {
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
      <Text>
        No moments found for the {type} named "{q}".
      </Text>
    );
  }
  const items = [...moments.momentsByQuery].sort(sortByDate);
  return (
    <View>
      <Text>
        {items.length} result{items.length > 1 && "s"} for: "{q}"
      </Text>
      {items.map(m => (
        <Moment key={m.id} moment={m} showDate={true} />
      ))}
    </View>
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
  const goBack = () => history.goBack();
  const query = qs.parse(history.location.search);
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Moments" />
      </Appbar.Header>
      <View>
        {query.type === undefined || query.q === undefined ? (
          <Text>Sorry, no search results. Try again.</Text>
        ) : (
          <MomentList type={query.type} q={query.q} />
        )}
        <Text>List of moments</Text>
      </View>
    </View>
  );
}
