import { UserContext } from "@/context/UserContext";
import { useLogto } from "@logto/rn";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  const { user, setUser } = useContext(UserContext);

  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hi</Text>
      {/* <Redirect href={'/Landing'} /> */}
    </View>
  );
}
