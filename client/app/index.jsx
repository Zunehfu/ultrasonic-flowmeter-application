import { ScrollView, Alert, Pressable, Text, View, Image } from "react-native";
import React from "react";
import "../global.css";
import CardContainer from "../components/CardContainer";
import { Link } from "expo-router";
import Logo from "../components/Logo";
import Display from "../components/Display";

const Home = () => {
  return (
    <View className="m-2 bg-two">
      <ScrollView className="">
        <View className="flex flex-row">
          <Logo />
          <Text className="text-4xl font-semibold text-six">SenseFlow</Text>
        </View>
        <Display />
        <CardContainer />
      </ScrollView>
    </View>
  );
};

export default Home;
