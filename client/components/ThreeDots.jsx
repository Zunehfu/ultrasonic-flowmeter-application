import { View } from "react-native";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const IconSpeed = () => {
  return (
    <View className="w-5 h-5">
      <Svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G fill="#000">
          <Path d="M8 12a2 2 0 110 4 2 2 0 010-4zM8 6a2 2 0 110 4 2 2 0 010-4zM10 2a2 2 0 10-4 0 2 2 0 004 0z" />
        </G>
      </Svg>
    </View>
  );
};

export default IconSpeed;
