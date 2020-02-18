import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../../../store/actions/activities";
import ListScreen from "../../../components/ListScreen";

function Activities({ activities, getActivities }) {
  useEffect(() => {
    getActivities();
  }, [getActivities]);
  return (
    <ListScreen
      title="Activities"
      type="Activity"
      items={activities.data}
      loading={activities.loading}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  getActivities: () => dispatch(fetchActivities())
});

export default connect(
  ({ activities }) => ({ activities }),
  mapDispatchToProps
)(Activities);
