import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import auth from "@react-native-firebase/auth";
import BottomLogo from "../assets/bottomLogo.png";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onSubmit = async () => {
    const { email, password } = this.state;
    if (email.length < 6 || password.length < 6) {
      return alert("your field is too short");
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.warn(e.message);
    }
  };
  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.part1}>
          <TextInput
            label="Email"
            style={styles.inputStyle}
            value={email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            label="Password"
            style={styles.inputStyle}
            value={password}
            textContentType="password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.part2}>
          <View>
            <Button mode="contained" onPress={this.onSubmit}>
              Sign In
            </Button>
            <Button mode="text" onPress={() => navigation.navigate("SignUp")}>
              Or Sign Up Here
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
    flex: 1.5,
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

export default Login;
