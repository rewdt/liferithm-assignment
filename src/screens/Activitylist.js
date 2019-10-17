import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { FAB } from "react-native-paper";
import { connect } from "react-redux";
import ActivityCard from "../components/ActivityCard";

import {
  fetchActivity,
  ascendingActivity,
  descendingActivity
} from "../actions/ViewActivity";

const { width, height } = Dimensions.get("window");
class Activitylist extends Component {
  static navigationOptions = {
    title: "Activity List"
  };
  componentDidMount() {
    const { fetchActivity } = this.props;
    fetchActivity();
  }

  // componentDidUpdate() {
  //   console.log(this.props.data);
  // }
  render() {
    const { navigation, data } = this.props;
    return (
      <View style={styles.root}>
        <FAB
          style={styles.fab}
          icon={() => <FontAwesome5 size={30} color="#fff" name="plus" />}
          onPress={() => navigation.navigate("AddActivity")}
        />
        <FlatList
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <View
                style={{
                  width,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity
                  style={styles.filterButton}
                  onPress={() => this.props.ascendingActivity()}
                >
                  <Text>Ascending</Text>
                  <FontAwesome5 name="sort-amount-up" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.filterButton}
                  onPress={() => this.props.descendingActivity()}
                >
                  <Text>Descending</Text>
                  <FontAwesome5 name="sort-amount-down" />
                </TouchableOpacity>
              </View>
            </View>
          }
          data={data}
          renderItem={({ item }) => <ActivityCard item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  fab: {
    position: "absolute",
    backgroundColor: "#2B2D5B",
    margin: 16,
    zIndex: 100,
    right: 0,
    bottom: 0
  },
  listHeader: {
    width,
    paddingVertical: 20
  },
  filterButton: {
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  data: state.activity.activitylist
});

export default connect(
  mapStateToProps,
  { fetchActivity, ascendingActivity, descendingActivity }
)(Activitylist);
