import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import auth from "@react-native-firebase/auth";
import BottomLogo from "../assets/bottomLogo.png";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  signUp = () => {
    const { navigation } = this.props;
    const { name, email, password } = this.state;
    if (email.length < 6 || password.length < 6) {
      return alert("your field is too short");
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      // .then(navigation.navigate("SignIn"))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  };
  render() {
    const { name, email, password } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.part1}>
          <TextInput
            label="Name"
            style={styles.inputStyle}
            value={name}
            onChangeText={name => this.setState({ name })}
          />
          <TextInput
            label="Email"
            style={styles.inputStyle}
            value={email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            label="Password"
            style={styles.inputStyle}
            textContentType="password"
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.part2}>
          <View>
            <Button mode="contained" onPress={this.signUp}>
              CREATE
            </Button>
            <Button mode="text" onPress={() => navigation.navigate("Login")}>
              Or Sign in here
            </Button>
          </View>
          <Image source={BottomLogo} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#2B2D5B"
  },
  part1: {
    flex: 2,
    // backgroundColor: "red",
    justifyContent: "space-evenly"
  },
  inputStyle: {
    width: "90%",
    alignSelf: "center"
  },
  part2: {
    flex: 3,
    justifyContent: "space-evenly"
    // backgroundColor: "green"
  }
});

export default SignUp;
