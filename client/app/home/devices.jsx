import { ScrollView, StyleSheet, Text, View } from "react-native";
import DeviceCard from "../../components/DeviceCard";
import { LinearGradient } from "expo-linear-gradient";

const devices = () => {
  return (
    <LinearGradient
      colors={["#10b981", "#0ea5e9"]}
      start={{ x: 0, y: 0 }}
      className="h-full w-full"
    >
      <ScrollView className="h-full w-full">
        <Text className="ml-3 mt-3 mb-2  text-white text-2xl font-ksemibold">
          Your Flowmeters
        </Text>
        <Text className="ml-3 mt-3 mb-2  text-white text-sm font-kmedium">
          41 Flow meters online out of 21
        </Text>
        <DeviceCard
          name="FL1231"
          temperature={"25\u00B0"}
          lowerlimit={100}
          upperlimit={200}
          notes="Note eka"
        />
        <DeviceCard
          name="FL8732"
          temperature={"25\u00B0"}
          lowerlimit={100}
          upperlimit={200}
          notes="Note eka"
        />
        <DeviceCard
          name="FL3521"
          temperature={"25\u00B0"}
          lowerlimit={100}
          upperlimit={200}
          notes="Note eka"
        />
        <DeviceCard
          name="FL0951"
          temperature={"25\u00B0"}
          lowerlimit={100}
          upperlimit={200}
          notes="Note eka"
        />
        <DeviceCard
          name="FL0231"
          temperature={"25\u00B0"}
          lowerlimit={100}
          upperlimit={200}
          notes="Note eka"
        />
        <DeviceCard
          name="FL1201"
          temperature={"25\u00B0"}
          lowerlimit={100}
          upperlimit={200}
          notes="Note eka"
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default devices;

const styles = StyleSheet.create({});
