import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Appbar } from "react-native-paper";
import { useHistory } from "react-router-native";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/auth";
import { fetchProfile } from "../../store/actions/profile";
import ScreenLoader from "../../components/ScreenLoader";

function Account({ profile, getProfile, logOut }) {
  const history = useHistory();
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  const goBack = () => history.goBack();
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Account" />
      </Appbar.Header>
      {profile.loading ? (
        <ScreenLoader />
      ) : (
        <View>
          <Text>You are currently signed in as:</Text>
          <Text>The Amazing {profile.data.name}</Text>
          <Button title="Sign out" onPress={logOut} />
        </View>
      )}
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(logOut()),
  getProfile: () => dispatch(fetchProfile())
});

export default connect(
  ({ profile }) => ({ profile }),
  mapDispatchToProps
)(Account);
