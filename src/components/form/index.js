import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import ScreenLoader from "../ScreenLoader";
import { fetchPeople } from "../../store/actions/people";
import { fetchPlaces } from "../../store/actions/places";
import { fetchActivities } from "../../store/actions/activities";
import HeaderWithBack from "../HeaderWithBack";

function MomentForm({
  onSave,
  momentToEdit,
  _getPeople,
  _getPlaces,
  _getActivities
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Promise.all([_getPeople(), _getPlaces(), _getActivities()]).then(() => {
      setIsLoading(false);
    });
  }, [_getPeople, _getPlaces, _getActivities, setIsLoading]);

  const title = `${momentToEdit === undefined ? "New" : "Edit"} Moment`;
  return (
    <>
      <HeaderWithBack title={title} />
      {isLoading ? (
        <ScreenLoader />
      ) : (
        <Form onSave={onSave} initialMoment={momentToEdit} />
      )}
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  _getPeople: () => dispatch(fetchPeople()),
  _getPlaces: () => dispatch(fetchPlaces()),
  _getActivities: () => dispatch(fetchActivities())
});

export default connect(null, mapDispatchToProps)(MomentForm);
