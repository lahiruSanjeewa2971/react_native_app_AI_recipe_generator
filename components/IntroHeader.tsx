import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, Switch, Text, View } from "react-native";

export default function IntroHeader() {
  const { user } = useContext(UserContext);

  const [isEnabled, setIsEnabled] = useState(false);

  console.log("user :", user);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.basicFlexContainer}>
        {user && user?.picture ? (
          <Image
            source={{ uri: user?.picture }}
            style={{ width: 45, height: 45, borderRadius: 99 }}
          />
        ) : (
          <Image
            source={require("./../assets/icons/profile.png")}
            style={{ width: 45, height: 45, borderRadius: 99 }}
          />
        )}
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          Hi, {user?.name}
        </Text>
      </View>

      <View style={styles.basicFlexContainer}>
        <Text style={{ fontFamily: "outfit", fontSize: 15 }}>
          {isEnabled ? "Veg" : "Non-Veg"}
        </Text>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basicFlexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
