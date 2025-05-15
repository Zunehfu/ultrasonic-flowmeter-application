// App.js

import React from "react";
import { View, StyleSheet } from "react-native";
import { Graph } from "react-native-graph";

export default function App() {
  const data = [
    { timestamp: 1, value: 10 },
    { timestamp: 2, value: 20 },
    { timestamp: 3, value: 15 },
    { timestamp: 4, value: 30 },
    { timestamp: 5, value: 25 },
  ];

  return (
    <View style={styles.container}>
      <Graph
        data={data}
        animated={true}
        color="tomato"
        thickness={3}
        enablePanGesture={true}
        enablePinchGesture={true}
        topAxisLabel="Max"
        bottomAxisLabel="Min"
        verticalPadding={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
