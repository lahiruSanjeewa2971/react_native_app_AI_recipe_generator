import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./../../assets/icons/home.png")}
              style={{ width: size, height: size, opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./../../assets/icons/explore.png")}
              style={{ width: size, height: size, opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cookbook"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./../../assets/icons/cookbook.png")}
              style={{ width: size, height: size, opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./../../assets/icons/profile.png")}
              style={{ width: size, height: size, opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
