import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const settings = () => {
  return (
    <LinearGradient
      colors={["#10b981", "#0ea5e9"]}
      start={{ x: 0, y: 0 }}
      className="h-full w-full"
    >
      <Text>settings</Text>
    </LinearGradient>
  );
};

export default settings;
