import { UserContext } from "@/context/UserContext";
import { LogtoConfig, LogtoProvider, UserScope } from "@logto/rn";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const [user, setUser] = useState();
  const [loaded, error] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  const config: LogtoConfig = {
    endpoint: "https://cch1gq.logto.app/",
    appId: "5y3ibu60zc47rax0ftz55",
    scopes: [UserScope.Email],
  };

  return (
    <LogtoProvider config={config}>
      <UserContext.Provider value={{ user, setUser }}>
        <Stack>
          {/* <Stack.Screen
          name="Landing"
          options={{
            headerShown: false,
          }}
        /> */}
        </Stack>
      </UserContext.Provider>
    </LogtoProvider>
  );
}
