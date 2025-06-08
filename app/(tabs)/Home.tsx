import IntroHeader from "@/components/IntroHeader";
import Colors from "@/utils/Colors";
import React from "react";
import { View } from "react-native";

export default function Home() {
  return (
    <View style={{
      height: '100%', 
      backgroundColor: Colors.WHITE,
      padding: 30
    }}>
      {/* Intro */}
      <IntroHeader/>

      {/* Recipe generator  */}

      {/* Category */}
    </View>
  );
}
