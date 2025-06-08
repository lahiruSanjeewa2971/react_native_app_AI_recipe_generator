import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";
import { Text, View } from "react-native";

export default function IntroHeader() {

    const {user} = useContext(UserContext)

    console.log('user :', user)
  return (
    <View>
      <Text>IntroHeader</Text>
    </View>
  );
}
