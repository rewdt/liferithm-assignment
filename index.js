/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import store from "./src/store";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fff",
    accent: "#f1c40f",
    background: "#232450",
    placeholder: "#fff"
  }
};

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
