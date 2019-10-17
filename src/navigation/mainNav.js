import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Auth from "./auth";
import AddActivity from "../screens/AddActivity";
import Activitylist from "../screens/Activitylist";
import SplashScreen from "../screens/SplashScreen";
import EditActivity from "../screens/EditActivity";

const Container = createStackNavigator({
  ActivityList: {
    screen: Activitylist
    // navigationOptions: ({ navigation }) => ({
    //   header: <View style={{ height: 100, backgroundColor: "black" }} />
    // })
  },
  AddActivity: {
    screen: AddActivity
  },
  EditActivity: {
    screen: EditActivity
  }
});

const AuthRoute = createSwitchNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    auth: { screen: Auth },
    container: { screen: Container }
  },
  {
    initialRouteName: "SplashScreen"
  }
);

const AppContainer = createAppContainer(AuthRoute);

export default AppContainer;
