import { StatusBar, View } from "react-native";
import { useState } from "react";
import { Slot, useRouter } from "expo-router";
import Tab from "../../components/Tab";

const RootLayout = () => {
  const [tab, setTab] = useState(0);
  const router = useRouter();

  const changeTab = (tab) => {
    if (tab == setTab) return;
    setTab(tab);
    if (tab == 0) return router.push("/home/devices");
    else if (tab == 1) return router.push("/home/settings");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content" // or "dark-content"
        backgroundColor="#10b981" // Android only
      />
      <Slot />
      <View
        style={{
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        className="flex-row absolute bottom-0 emer bg-dark w-full"
      >
        <Tab title="Flowmeters" tab_id={0} tab={tab} changeTab={changeTab} />
        <Tab title="Settings" tab_id={1} tab={tab} changeTab={changeTab} />
      </View>
    </View>
  );
};

export default RootLayout;
