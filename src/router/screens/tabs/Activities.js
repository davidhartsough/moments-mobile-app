import React from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../../../store/actions/activities";
import TabViewList from "../../../components/list/TabViewList";

function Activities(props) {
  return <TabViewList {...props} title="Activities" type="Activity" />;
}

const mapStateToProps = ({ activities: { loading, data } }) => ({
  loading,
  data
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchActivities())
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
