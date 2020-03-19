import React from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../../../store/actions/people";
import TabViewList from "../../../components/list/TabViewList";

function People(props) {
  return <TabViewList {...props} title="People" type="Person" />;
}

const mapStateToProps = ({ people: { loading, data } }) => ({
  loading,
  data
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
