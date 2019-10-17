import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";

class SplashScreen extends Component {
  componentDidMount() {
    this.checkAuth();
  }
  checkAuth = async () => {
    await auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("ActivityList");
        console.warn(user);
      } else {
        this.props.navigation.navigate("Login");
      }
    });
  };
  render() {
    return <View style={styles.root}></View>;
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#2B2D5B"
  }
});

export default SplashScreen;
