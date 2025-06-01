import { UserContext } from "@/context/UserContext";
import GlobalAPIs from "@/services/GlobalAPIs";
import { useLogto } from "@logto/rn";
import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  const { user, setUser } = useContext(UserContext);

  const router = useRouter();

  // const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then(async (userData) => {
        if (userData?.email) {
          try {
            const result = await GlobalAPIs.GetUserByEmail(userData?.email);
            console.log("result :", result.data?.data);
            if (result?.data?.data.length === 0) {
              const data = {
                email: userData?.email,
                name: userData?.name,
                picture: userData?.picture,
              };

              try {
                const newUserResponse = await GlobalAPIs.CreateNewUser(data);
                console.log("newUserResponse :", newUserResponse.data?.data);
                if (newUserResponse?.status === 201) {
                  setUser(newUserResponse.data?.data);
                  router.replace("/Landing");
                } else {
                  setUser(null);
                }
              } catch (error) {
                console.log("error in create a new user :", error);
              }
            } else {
              setUser(result?.data?.data[0]);
              console.log("user exist");
              router.replace("/Landing");
            }
          } catch (error) {
            console.log("error in ", error);
          }
        }
      });
    }
  }, [isAuthenticated]);

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
