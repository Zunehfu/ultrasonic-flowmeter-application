import { ScrollView, StyleSheet, Text } from "react-native";
import DeviceCard from "../../components/DeviceCard";
import { LinearGradient } from "expo-linear-gradient";

const devices = () => {
  return (
    <LinearGradient
      colors={["#10b981", "#0ea5e9"]}
      start={{ x: 0, y: 0 }}
      className="h-full w-full"
    >
      <ScrollView className="mt-12 h-full w-full">
        <Text className="ml-3 mt-4 text-white text-2xl font-ksemibold">
          Your Flow Meters
        </Text>
        <Text className="ml-3 mt-3  text-white text-sm font-kmedium">
          20 Flow meters online out of 41
        </Text>
        <Text className="ml-3 mt-3  text-white text-xs font-kmedium">
          Touch to analyze
        </Text>
        <Text className="ml-3  mb-2  text-white text-xs font-kmedium">
          Hold for more info
        </Text>
        <DeviceCard
          name="FL1231"
          temperature={"24\u00B0"}
          rate={12.2}
          lowerlimit={10}
          upperlimit={13}
          notes="Flowmeter at the basement"
          condition={true}
        />
        <DeviceCard
          name="FL8732"
          temperature={"25\u00B0"}
          rate={9.7}
          lowerlimit={7}
          upperlimit={9}
          notes="Flowmeter at level 2"
          condition={false}
        />
        <DeviceCard
          name="FL3521"
          temperature={"23\u00B0"}
          rate={14.1}
          lowerlimit={14}
          upperlimit={14.5}
          notes="Flowmeter at level 4"
          condition={true}
        />
        <DeviceCard
          name="FL0951"
          temperature={"25\u00B0"}
          rate={2.2}
          lowerlimit={2}
          upperlimit={2.3}
          notes="Flowmeter at the basement"
          condition={true}
        />
        <DeviceCard
          name="FL0231"
          temperature={"25\u00B0"}
          rate={6.3}
          lowerlimit={6}
          upperlimit={7}
          notes="Flowmeter at the basement"
          condition={true}
        />
        <DeviceCard
          name="FL1201"
          temperature={"25\u00B0"}
          rate={1.3}
          lowerlimit={1}
          upperlimit={4}
          notes="Flowmeter at the basement"
          condition={true}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default devices;

const styles = StyleSheet.create({});
