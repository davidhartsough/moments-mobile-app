import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlaces } from "../../../store/actions/places";
import ListScreen from "../../../components/ListScreen";

function Places({ places, getPlaces }) {
  useEffect(() => {
    getPlaces();
  }, [getPlaces]);
  return (
    <ListScreen
      title="Places"
      type="Place"
      items={places.data}
      loading={places.loading}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  getPlaces: () => dispatch(fetchPlaces())
});

export default connect(
  ({ places }) => ({ places }),
  mapDispatchToProps
)(Places);
