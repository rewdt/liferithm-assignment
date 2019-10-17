import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Surface } from "react-native-paper";
import { connect } from "react-redux";
import { deleteActivity } from "../actions/ViewActivity";

class ActivityCard extends Component {
  onDelete = () => {
    const { item, deleteActivity } = this.props;
    deleteActivity(item);
    // console.log(item);
  };
  render() {
    const { item, navigation } = this.props;
    const date = new Date(item.date);
    return (
      <Surface style={styles.surface}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={this.onDelete}>
            <FontAwesome5 name="trash" />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <Text>{item.name}</Text>
          <Text>{date.toString()}</Text>
        </View>
        <View style={[styles.iconContainer, { alignItems: "flex-end" }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditActivity", { item })}
          >
            <FontAwesome5 name="pen" />
          </TouchableOpacity>
        </View>
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    marginVertical: 10,
    height: 80,
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
    elevation: 4
  },
  iconContainer: {
    flex: 1
  },
  bodyContainer: {
    flex: 5,
    justifyContent: "space-evenly"
  }
});

export default connect(
  null,
  { deleteActivity }
)(withNavigation(ActivityCard));
