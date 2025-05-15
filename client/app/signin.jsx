import { Text, View, TextInput, Pressable, Alert } from "react-native";
import { useState } from "react";
import Logo from "../components/Logo.jsx";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

const signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onLogin = async () => {
    try {
      console.log(JSON.stringify({ email, pass }));
      const response = await fetch("http://192.168.1.116:3000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      if (result.code == "INVALID_USER") return Alert.alert("Incorrect email");
      else if (result.code == "INCORRECT_PASSWORD")
        return Alert.alert("Incorrect password");
      await SecureStore.setItemAsync("token", result.data.token);

      if (result.status == "SUCCESS") router.push("/home/devices");

      console.log("POST success:", result);
    } catch (error) {
      console.error("POST error:", error);
    } finally {
      console.log("POST request completed");
    }
  };

  return (
    <View className="bg-dark h-full w-full">
      <View className="h-full w-full justify-center items-center">
        <LinearGradient
          colors={["#10b981", "#0ea5e9"]}
          style={{
            elevation: 5,
            borderRadius: 35,
          }}
          start={{ x: 0, y: 0 }}
          className="rounded-xl py-2 w-96"
        >
          <View className="flex items-center justify-center">
            <View className="relative">
              <Text className="font-kbold text-offwhite">SenseFlow</Text>
              <View className="absolute left-[-40] top-[-4]">
                <Logo />
              </View>
            </View>
            <View
              className="flex
            pt-4 p-4 w-full gap-2"
            >
              <View>
                <Text className="text-xs font-kmedium text-dark">
                  Personal | Company email
                </Text>
                <TextInput
                  placeholder="abc123@email.com"
                  className="rounded-lg bg-offwhite h-12 text-sm font-kmedium"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View>
                <Text className="text-xs font-kmedium text-dark">Password</Text>
                <TextInput
                  placeholder="password@123"
                  className="rounded-lg bg-offwhite h-12 text-sm font-kmedium"
                  value={pass}
                  onChangeText={setPass}
                ></TextInput>
              </View>
            </View>
            <Pressable
              onPress={onLogin}
              className="bg-dark py-1 rounded-xl px-10"
            >
              <Text className="text-white font-kmedium">Sign in</Text>
            </Pressable>
            <View className="mt-2 flex flex-row">
              <Text className=" font-kmedium text-xs text-gray-300">
                Not registered?
              </Text>
              <Pressable
                onPress={() => {
                  router.push("/signup");
                }}
              >
                <Text className="font-kmedium text-xs underline pl-1 text-gray-300">
                  Sign up
                </Text>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default signin;
