import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const displayWidth = screenWidth;
const displayHeight = 0.36 * screenHeight;

const Display = () => {
  return (
    <View
      style={{
        width: displayWidth,
        height: displayHeight,
      }}
      className=""
    >
      <Text>Display</Text>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({});
