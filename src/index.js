import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import StoreProvider from "./store";
import Authenticator from "./auth";
import Router from "./router";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1471eb",
    accent: "#1471eb"
  }
};

export default () => (
  <StoreProvider>
    <PaperProvider theme={theme}>
      <Authenticator>
        <Router />
      </Authenticator>
    </PaperProvider>
  </StoreProvider>
);
