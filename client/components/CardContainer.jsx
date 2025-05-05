import { Text, View } from "react-native";
import React from "react";
import HomeCard from "./HomeCard";

const CardContainer = () => {
  return (
    <View className="w-full gap-3 ">
      <View className="justify-evenly w-full flex-row space">
        <HomeCard name="Speed" />
        <HomeCard name="Temperature" />
      </View>
      <View className="justify-evenly w-full flex-row space">
        <HomeCard name="Humidity" />
        <HomeCard name="Notfications" />
      </View>
      <View className="justify-evenly w-full flex-row space">
        <HomeCard name="Humidity" />
        <HomeCard name="Notfications" />
      </View>
    </View>
  );
};

export default CardContainer;
