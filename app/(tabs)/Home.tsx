import CategoryList from "@/components/CategoryList";
import CreateRecipe from "@/components/CreateRecipe";
import IntroHeader from "@/components/IntroHeader";
import Colors from "@/utils/Colors";
import React from "react";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView style={{
      height: '100%', 
      backgroundColor: Colors.WHITE,
      paddingVertical: 35,
      paddingHorizontal: 10
    }}>
      {/* Intro */}
      <IntroHeader/>

      {/* Recipe generator  */}
      <CreateRecipe/>

      {/* Category */}
      <CategoryList/>
    </ScrollView>
  );
}
