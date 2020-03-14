import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-native";
import { updateMoment, getMomentToEdit } from "../../store/actions/moments";
import MomentForm from "../../components/form/";
import ScreenLoader from "../../components/ScreenLoader";
import HeaderWithBack from "../../components/HeaderWithBack";

function EditorLoading() {
  return (
    <>
      <HeaderWithBack title="Edit Moment" />
      <ScreenLoader />
    </>
  );
}

function Editor({ id, goBack, moments, _updateMoment, _getMomentToEdit }) {
  useEffect(() => {
    const { momentToEdit } = moments;
    if (momentToEdit === null || momentToEdit.id !== id) {
      _getMomentToEdit(id);
    }
  }, [id, moments, _getMomentToEdit]);
  function onSave(updatedMoment) {
    _updateMoment(updatedMoment).then(() => goBack());
  }
  if (moments.loading) return <EditorLoading />;
  return <MomentForm onSave={onSave} momentToEdit={moments.momentToEdit} />;
}

const mapDispatchToProps = dispatch => ({
  _updateMoment: m => dispatch(updateMoment(m)),
  _getMomentToEdit: id => dispatch(getMomentToEdit(id))
});

const EditMoment = connect(
  ({ moments }) => ({ moments }),
  mapDispatchToProps
)(Editor);

export default function() {
  const { id } = useParams();
  const history = useHistory();
  const goBack = () => history.goBack();
  if (id === null) goBack();
  return <EditMoment id={id} goBack={goBack} />;
}
