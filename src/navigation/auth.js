import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import { createStackNavigator } from "react-navigation-stack";

const Auth = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      header: (
        <SafeAreaView style={{ backgroundColor: "#2B2D5B" }}>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={{ marginVertical: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <FontAwesome5 name="arrow-left" color="#F63535" size={20} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 28, color: "#fff" }}>Create Account</Text>
          </View>
        </SafeAreaView>
      )
    })
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: (
        <SafeAreaView style={{ backgroundColor: "#2B2D5B" }}>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={{ marginVertical: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <FontAwesome5 name="arrow-left" color="#F63535" size={20} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 28, color: "#fff" }}>Sign In</Text>
          </View>
        </SafeAreaView>
      )
    })
  }
});

export default Auth;
