import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-native";
import { createMoment } from "../../store/actions/moments";
import MomentForm from "../../components/form/";

function NewMoment({ saveNewMoment }) {
  const history = useHistory();
  function onSave(newMoment) {
    saveNewMoment(newMoment).then(() => history.push("/"));
  }
  return <MomentForm onSave={onSave} />;
}

const mapDispatchToProps = dispatch => ({
  saveNewMoment: m => dispatch(createMoment(m))
});

export default connect(null, mapDispatchToProps)(NewMoment);
