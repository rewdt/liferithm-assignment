import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Surface } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import { editActivity } from "../actions/ViewActivity";

class EditActivity extends Component {
  static navigationOptions = {
    title: "Edit Activity"
  };
  state = {
    name: "",
    description: "",
    date: new Date(),
    mode: "date",
    show: false
  };
  componentDidMount() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const nDate = new Date(item.date);
    // console.warn(item);
    this.setState({
      name: item.name,
      date: nDate,
      description: item.description
    });
  }
  setDate = (event, date) => {
    // console.warn(date);
    // date = date || this.state.date;
    this.setState({
      show: Platform.OS === "ios" ? true : false,
      date
    });
  };

  show = mode => {
    this.setState({
      show: true,
      mode
    });
  };

  datepicker = () => {
    this.show("date");
  };

  timepicker = () => {
    this.show("time");
  };

  addActivity = () => {
    const { navigation, editActivity } = this.props;
    const item = navigation.getParam("item");
    const { name, description, date } = this.state;
    const data = { name, description, date: date.valueOf() };
    editActivity(data, item);
    navigation.goBack();
  };
  render() {
    const { name, description, date, show, mode } = this.state;
    return (
      <ScrollView
        contentContainerStyle={{ height: Dimensions.get("window").height }}
      >
        <View style={styles.root}>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Surface style={styles.surface}>
              <View style={styles.inputContainer}>
                <Text>Name</Text>
                <TextInput
                  value={name}
                  onChangeText={name => this.setState({ name })}
                  placeholder="name"
                  style={styles.inputStyle}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text>Date</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#dedede"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.inputStyle} onPress={this.datepicker}>
                      {date.toLocaleDateString()}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <FontAwesome5 name="chevron-down" />
                  </View>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text>Time</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#dedede"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.inputStyle} onPress={this.timepicker}>
                      {date.toLocaleTimeString()}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <FontAwesome5 name="chevron-down" />
                  </View>
                </View>
              </View>
              <View style={[styles.inputContainer, { height: 130 }]}>
                <Text>Description</Text>
                <TextInput
                  placeholder="description"
                  value={description}
                  onChangeText={description => this.setState({ description })}
                  multiline
                  style={styles.DescriptionContainer}
                />
              </View>
            </Surface>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.submitContainer}
              onPress={this.addActivity}
            >
              <FontAwesome5 name="arrow-right" color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  surface: {
    paddingHorizontal: 10,
    alignItems: "center",
    height: "80%",
    width: "90%",
    elevation: 4
  },
  inputStyle: {
    height: 33,
    backgroundColor: "#dedede"
  },
  DescriptionContainer: {
    height: 100,
    backgroundColor: "#dedede",
    textAlignVertical: "top"
  },
  inputContainer: {
    height: 50,
    width: "95%",
    justifyContent: "space-evenly",
    marginVertical: 10
  },
  submitContainer: {
    backgroundColor: "#2B2D5B",
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(
  null,
  { editActivity }
)(EditActivity);
