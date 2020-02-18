import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../../../store/actions/people";
import ListScreen from "../../../components/ListScreen";

function People({ people, getPeople }) {
  useEffect(() => {
    getPeople();
  }, [getPeople]);
  return (
    <ListScreen
      title="People"
      type="Person"
      items={people.data}
      loading={people.loading}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(fetchPeople())
});

export default connect(
  ({ people }) => ({ people }),
  mapDispatchToProps
)(People);
