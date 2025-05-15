import { StatusBar, View } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";

const RootLayout = () => {
  const [loaded] = useFonts({
    KantoraBlack: require("../assets/fonts/Kontora-Black.otf"),
    KantoraBold: require("../assets/fonts/Kontora-Bold.otf"),
    KantoraExtraBlack: require("../assets/fonts/Kontora-ExtraBlack.otf"),
    KantoraExtraBold: require("../assets/fonts/Kontora-ExtraBold.otf"),
    KantoraLight: require("../assets/fonts/Kontora-Light.otf"),
    KantoraMedium: require("../assets/fonts/Kontora-Medium.otf"),
    KantoraRegular: require("../assets/fonts/Kontora-Regular.otf"),
    KantoraSemiBold: require("../assets/fonts/Kontora-SemiBold.otf"),
    KantoraThin: require("../assets/fonts/Kontora-Thin.otf"),
  });
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content" // or "dark-content"
        backgroundColor="#161716" // Android only
      />
      <Slot />
    </View>
  );
};

export default RootLayout;
