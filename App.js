/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import firebase from "@react-native-firebase/app";
import AppContainer from "./src/navigation/mainNav";

export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
