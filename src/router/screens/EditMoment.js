import React, { useState, useEffect } from "react";
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

function Editor({
  id,
  goBack,
  momentsLoading,
  momentToEdit,
  _updateMoment,
  _getMomentToEdit
}) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (momentToEdit === null || momentToEdit.id !== id) {
      _getMomentToEdit(id);
    }
  }, [id, momentToEdit, _getMomentToEdit]);
  function onSave(updated, previous) {
    setIsLoading(true);
    _updateMoment(updated, previous).then(() => goBack());
  }
  if (momentsLoading || isLoading) return <EditorLoading />;
  return <MomentForm onSave={onSave} momentToEdit={momentToEdit} />;
}

const mapDispatchToProps = dispatch => ({
  _updateMoment: (u, p) => dispatch(updateMoment(u, p)),
  _getMomentToEdit: id => dispatch(getMomentToEdit(id))
});

const EditMoment = connect(
  ({ moments }) => ({
    momentsLoading: moments.loading,
    momentToEdit: moments.momentToEdit
  }),
  mapDispatchToProps
)(Editor);

export default function() {
  const { id } = useParams();
  const history = useHistory();
  const goBack = () => history.goBack();
  if (id === null) goBack();
  return <EditMoment id={id} goBack={goBack} />;
}
