import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import BottomLogo from "../assets/bottomLogo.png";

class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.part1}>
          <TextInput
            label="Name"
            style={styles.inputStyle}
            // value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            label="Email"
            style={styles.inputStyle}
            // value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            label="Password"
            style={styles.inputStyle}
            // value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <View style={styles.part2}>
          <View>
            <Button mode="contained" onPress={() => alert("pressed")}>
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
