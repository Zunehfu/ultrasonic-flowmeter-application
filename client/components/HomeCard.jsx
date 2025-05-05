import { Text, View, Dimensions } from "react-native";
import React from "react";
import HomeCardIcon from "./HomeCardIcon";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const cardHeight = (0.63 * screenHeight) / 2.5 - 25 * 2;
const cardWidth = screenWidth / 2 - 30;

const HomeCard = ({ name }) => {
  return (
    <View
      style={{
        width: cardWidth,
        height: cardHeight,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 6, // android shadow
      }}
      className="rounded-3xl bg-three"
    >
      <View className="flex-row h-112">
        <View className="mx-2">
          <HomeCardIcon name={name} />
        </View>

        <View className="justify-center">
          <Text className="text-one text-lg font-medium">{name}</Text>
        </View>
      </View>
      <View className="flex-row items-center justify-center h-full ">
        <Text className="text-six text-6xl">120</Text>
        <Text className="text-six text-2xl">m/s</Text>
      </View>
    </View>
  );
};

export default HomeCard;
