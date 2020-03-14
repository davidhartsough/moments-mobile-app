import React from "react";
import { connect } from "react-redux";
import { fetchPlaces } from "../../../store/actions/places";
import TabViewList from "../../../components/list/TabViewList";

function Places(props) {
  return <TabViewList {...props} title="Places" type="Place" />;
}

const mapStateToProps = ({ places: { hasFetched, loading, data } }) => ({
  hasFetched,
  loading,
  data
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchPlaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
