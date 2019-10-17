import {
  FETCH_ACTIVITIES,
  ASCENDING_ACTIVITIES,
  DESCENDING_ACTIVITIES
} from "./index";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

export const ascendingActivity = () => dispatch => {
  dispatch({
    type: ASCENDING_ACTIVITIES
  });
};

export const descendingActivity = () => dispatch => {
  dispatch({
    type: DESCENDING_ACTIVITIES
  });
};

export const addActivity = values => async dispatch => {
  const uid = auth().currentUser.uid;
  const ref = database().ref(`/users/${uid}`);
  await ref.push(values);
  const arr = [];
  const getActivity = data => {
    const val = data.val();
    const key = data.key;
    val.key = key;
    arr.push(val);
    dispatch({
      type: FETCH_ACTIVITIES,
      payload: arr
    });
  };
  const fetchref = database().ref(`/users/${uid}`);
  fetchref.on("child_added", function(data) {
    getActivity(data);
  });
};

export const editActivity = (values, item) => async dispatch => {
  const uid = auth().currentUser.uid;
  const ref = database().ref(`/users/${uid}/${item.key}`);
  await ref.set(values);
  const arr = [];
  const getActivity = data => {
    const val = data.val();
    const key = data.key;
    val.key = key;
    arr.push(val);
    dispatch({
      type: FETCH_ACTIVITIES,
      payload: arr
    });
  };
  const fetchref = database().ref(`/users/${uid}`);
  fetchref.on("child_added", function(data) {
    getActivity(data);
  });
};

export const fetchActivity = () => dispatch => {
  const arr = [];
  const getActivity = data => {
    const val = data.val();
    const key = data.key;
    val.key = key;
    arr.push(val);
    dispatch({
      type: FETCH_ACTIVITIES,
      payload: arr
    });
  };
  const uid = auth().currentUser.uid;
  const ref = database().ref(`/users/${uid}`);
  ref.on("child_added", function(data) {
    getActivity(data);
  });
};

export const deleteActivity = item => async dispatch => {
  const uid = auth().currentUser.uid;
  const ref = database().ref(`/users/${uid}/${item.key}`);
  await ref.remove();
  const arr = [];
  const getActivity = data => {
    const val = data.val();
    const key = data.key;
    val.key = key;
    arr.push(val);
    dispatch({
      type: FETCH_ACTIVITIES,
      payload: arr
    });
  };
  const fetchref = database().ref(`/users/${uid}`);
  fetchref.on("child_added", function(data) {
    getActivity(data);
  });
};
