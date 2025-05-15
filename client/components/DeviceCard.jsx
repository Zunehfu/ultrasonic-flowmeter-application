import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const DeviceCard = ({
  name,
  rate,
  temperature,
  lowerlimit,
  upperlimit,
  notes,
}) => {
  const router = useRouter();
  return (
    <Pressable
      className="p-2 w-full h-52"
      onPress={() => {
        router.push("/analyze");
      }}
    >
      <View
        style={{ borderRadius: 10 }}
        className="bg-dark w-full h-full pl-2 pr-2"
      >
        <View className="flex-row w-full h-10 border-white justify-between items-end">
          <Text className="text-white font-ksemibold">{name}</Text>
          <View className="flex-row items-end">
            <Text className="text-white text-xs font-kmedium mr-2">Online</Text>
            <View
              style={{ borderRadius: 10 }}
              className="bg-green-300 h-4 w-4 mb-1"
            ></View>
          </View>
        </View>
        <View style={{ borderWidth: 0.55 }} className="border-white"></View>
        <View className="mt-4 flex gap-0.5">
          <Text className="text-xs font-kmedium text-white">
            Flow rate: {rate}
          </Text>
          <Text className="text-xs font-kmedium text-white">
            Temperature: {temperature}
          </Text>
          <Text className="text-xs font-kmedium text-white">
            Operating range: {lowerlimit} - {upperlimit} (m³/s)
          </Text>
          <Text className="text-xs font-kmedium text-white">
            Notes: {notes}
          </Text>
          <Text className="text-xs font-kmedium text-white">
            * Fluid flow is under operating conditions
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default DeviceCard;

const styles = StyleSheet.create({});
