import { Text, View, Pressable } from "react-native";

const Tab = ({ title, tab, changeTab, tab_id }) => {
  return (
    <View className="p-2 relative w-1/2 justify-center items-center">
      <Pressable
        style={{
          borderRadius: 35,
        }}
        className={`justify-center items-center w-full h-full ${
          tab === tab_id ? "bg-emerald-500" : "bg-dark"
        }`}
        onPress={() => {
          changeTab(tab_id);
        }}
      >
        <Text
          className={`text-sm text-white ${
            tab === tab_id ? "font-kbold" : "font-kmedium"
          }`}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Tab;
