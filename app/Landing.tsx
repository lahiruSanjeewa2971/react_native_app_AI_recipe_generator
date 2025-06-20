import { UserContext } from "@/context/UserContext";
import GlobalAPIs from "@/services/GlobalAPIs";
import Colors from "@/utils/Colors";
import { Marquee } from "@animatereactnative/marquee";
import { useLogto } from "@logto/rn";
import { useNavigation, useRouter } from "expo-router";
import React, { useContext, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Landing() {
  const { signIn, signOut, isAuthenticated, getIdTokenClaims } = useLogto();
  const navigation = useNavigation();
  const router = useRouter();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    const handleAuthenticatedUser = async () => {
      try {
        const userData = await getIdTokenClaims();
        if (!userData?.email) return;

        const result = await GlobalAPIs.GetUserByEmail(userData?.email);
        const existingUsers = result?.data?.data || [];

        if (existingUsers.length === 0) {
          const newUserPayload = {
            email: userData.email,
            name: userData.name,
            picture: userData.picture,
          };

          const newUserResponse = await GlobalAPIs.CreateNewUser(
            newUserPayload
          );
          const createdUser = newUserResponse?.data?.data;

          if (newUserResponse?.status === 201 && createdUser) {
            setUser(createdUser);
            router.replace("/(tabs)/Home");
          } else {
            setUser(null);
          }
        } else {
          setUser(existingUsers[0]);
          router.replace("/(tabs)/Home");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    if (isAuthenticated) {
      handleAuthenticatedUser();
    }
  }, [isAuthenticated]);


  const imageList = [
    require("./../assets/images/1.jpg"),
    require("./../assets/images/c1.jpg"),
    require("./../assets/images/2.jpg"),
    require("./../assets/images/c2.jpg"),
    require("./../assets/images/3.jpg"),
    require("./../assets/images/c3.jpg"),
    require("./../assets/images/4.jpg"),
    require("./../assets/images/5.jpg"),
    require("./../assets/images/6.jpg"),
  ];
  return (
    <GestureHandlerRootView>
      <View style={{ gap: 10 }}>
        <Marquee
          spacing={10}
          speed={0.7}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <Marquee
          spacing={10}
          speed={0.4}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <Marquee
          spacing={10}
          speed={0.6}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          height: "100%",
          padding: 20,
        }}
      >
        <Text style={styles.titleText}>
          RecipeAI | Find, Create & Enjoy Delicious Recipes.
        </Text>

        <Text style={styles.subTitleText}>
          Generate delicious recipes in seconds with the power of AI.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={async () => signIn("exp://192.168.43.87:8081")}
          // onPress={async () => router.push('/(tabs)/Home')}
        >
          <Text style={styles.buttonText}>Get Started.</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button} onPress={async () => signOut()}>
          <Text style={styles.buttonText}>Sign Out.</Text>
        </TouchableOpacity> */}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  titleText: {
    fontFamily: "outfit-bold",
    fontSize: 25,
    textAlign: "center",
  },
  subTitleText: {
    fontFamily: "outfit",
    fontSize: 17,
    textAlign: "center",
    color: Colors.GRAY,
    marginTop: 7,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.WHITE,
    fontSize: 17,
    fontFamily: "outfit",
  },
});
