import { View } from "react-native";
import React from "react";
import Svg, { Path, Defs, Circle } from "react-native-svg";

const IconTemperature = () => {
  return (
    <View className="">
      <Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M8 16a1 1 0 100 2 1 1 0 000-2zm0 0l.007-4M8 17l.007.007M20 5a2 2 0 11-4 0 2 2 0 014 0zm-8 12a4 4 0 11-7-2.646V6a3 3 0 016 0v8.354c.622.705 1 1.631 1 2.646z"
          stroke="#fff"
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default IconTemperature;
