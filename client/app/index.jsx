import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const verify = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");
      console.log("token in user storage");
      console.log(token);
      if (!token) {
        console.log("adooooo");
        router.push("/signin");
      }
      const response = await fetch("http://192.168.1.116:3000/auth/verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // const result = await response.json();
      // if ((result.code = "JWT_ERROR")) {
      //   setLoading(false);
      //   return router.push("/signin");
      // }
      // console.log(result);

      router.push("/home/devices");
    } catch (error) {
      console.error("GET error:", error);
    } finally {
      console.log("GET request completed");
      setLoading(false);
    }
  };

  useEffect(() => {
    verify();
  }, []);
  return (
    <View>
      <Text>{loading ? "Loading" : "Done"}</Text>
    </View>
  );
};

export default index;
