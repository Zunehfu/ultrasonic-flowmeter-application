import { Dimensions, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IconTempurature from "../components/IconTempurature";

const screenHeight = Dimensions.get("window").height;

const Home = () => {
  return (
    <View className="h-full w-full bg-dark">
      <View style={{ height: 0.38 * screenHeight }}></View>
      <View style={{ height: 0.62 * screenHeight }}>
        <LinearGradient
          colors={["#10b981", "#0ea5e9"]}
          style={{
            elevation: 5,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
          }}
          start={{ x: 0, y: 0 }}
          className="h-full w-full"
        >
          <View className="h-full">
            <View
              style={{ height: 0.62 * 0.62 * screenHeight }}
              className="justify-center items-center"
            >
              <View className="">
                <View className="relative">
                  <Text className="text-dark font-ksemibold text-7xl">125</Text>
                  <Text className="text-offwhite font-kmedium absolute bottom-5 right-[-55]">
                    m³/s
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ height: 0.38 * 0.62 * screenHeight }} className="">
              <View className="px-1 pb-2 w-full flex-row  justify-between">
                <View className="w-1/3 px-1">
                  <View className="relative flex h-full w-full bg-offwhite/50 items-center justify-center rounded-lg">
                    <Text className="font-kblack text-offwhite text-2xl">
                      {"25\u00B0"}
                    </Text>
                    <View className="top-0 left-0 absolute w-8 h-8">
                      <IconTempurature />
                    </View>
                  </View>
                </View>
                <View className="w-1/3 px-1">
                  <View className="relative flex h-full w-full bg-offwhite/50 items-center justify-center rounded-lg">
                    <Text className="font-kblack text-offwhite text-2xl">
                      {"25\u00B0"}
                    </Text>
                    <View className="top-0 left-0 absolute w-8 h-8">
                      <IconTempurature />
                    </View>
                  </View>
                </View>
                <View className="w-1/3 px-1">
                  <View className="relative flex h-full w-full bg-offwhite/50 items-center justify-center rounded-lg">
                    <Text className="font-kblack text-offwhite text-2xl">
                      {"25\u00B0"}
                    </Text>
                    <View className="top-0 left-0 absolute w-8 h-8">
                      <IconTempurature />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Home;
