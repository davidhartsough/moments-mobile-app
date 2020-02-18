import React from "react";
import { NativeRouter, Route, Switch, BackButton } from "react-router-native";
import { TabView, MomentList, NewMoment, Account, EditMoment } from "./screens";

export default function Router() {
  return (
    <NativeRouter>
      <BackButton>
        <Switch>
          <Route exact path="/">
            <TabView />
          </Route>
          <Route path="/moments">
            <MomentList />
          </Route>
          <Route path="/edit/:id">
            <EditMoment />
          </Route>
          <Route path="/new">
            <NewMoment />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </BackButton>
    </NativeRouter>
  );
}
