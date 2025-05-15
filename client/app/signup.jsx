import { StatusBar, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import Logo from "../components/Logo.jsx";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");

  const onRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass, repass }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("POST success:", result);
    } catch (error) {
      console.error("POST error:", error);
    } finally {
      console.log("POST request completed");
    }
  };

  return (
    <View className="bg-dark h-full w-full">
      <StatusBar
        barStyle="light-content" // or "dark-content"
        backgroundColor="#161716" // Android only
      />
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
              <Text className="font-ksemibold text-offwhite">SenseFlow</Text>
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
                  placeholder="ceo@alibaba.com"
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
              <View>
                <Text className="text-xs font-kmedium text-dark">
                  Re-enter password
                </Text>
                <TextInput
                  placeholder="password@123"
                  className="rounded-lg bg-offwhite h-12 text-sm font-kmedium"
                  value={repass}
                  onChangeText={setRepass}
                ></TextInput>
              </View>
            </View>
            <Pressable
              onPress={onRegister}
              className="bg-dark py-1 rounded-xl px-10"
            >
              <Text className="text-white font-kmedium">Register</Text>
            </Pressable>
            <View className="mt-2 flex flex-row">
              <Text className=" font-kmedium text-xs text-gray-300">
                Already registered?
              </Text>
              <Pressable
                onPress={() => {
                  router.push("/signin");
                }}
              >
                <Text className="font-kmedium text-xs underline pl-1 text-gray-300">
                  Log in
                </Text>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default signup;
