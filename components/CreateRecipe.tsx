import GlobalAPIs from "@/services/GlobalAPIs";
import Colors from "@/utils/Colors";
import React, { useRef, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import GENERATE_RECIPE_OPTION_PROMPT from "./../services/Prompts";
import Button from "./Button";

export default function CreateRecipe() {
  const [userInput, setUserInput] = useState<string>();
  const [recipeOptions, setRecipeOptions] = useState();
  const [loadingGenerateButton, setLoadingGenerateButton] = useState(false);
  const actionSheet = useRef<ActionSheetRef>(null)

  const onGenerate = async () => {
    console.log('1')
    if (!userInput) {
      Alert.alert("Please enter details");
      return;
    }
    
    console.log('2')
    setLoadingGenerateButton(true)
    const result = await GlobalAPIs.AIModel(
      userInput + GENERATE_RECIPE_OPTION_PROMPT
    );
    setLoadingGenerateButton(false)

    console.log("result :", result?.choices[0].message);
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("./../assets/images/pan.gif")}
        style={{ width: 80, height: 80 }}
      />
      <Text style={styles.headingText}>
        Warm up your stove, and let's get cooking.
      </Text>
      <Text style={styles.subHeadingText}>Make something with LOVE.</Text>

      <TextInput
        style={styles.textInput}
        placeholder="What you want to create? Add ingredients etc."
        multiline={true}
        numberOfLines={3}
        onChangeText={(value) => setUserInput(value)}
      />

      <Button
        label={"Generate Recipe"}
        onPress={() => onGenerate()}
        iconName={"sparkles"}
        loading={loadingGenerateButton}
      />

      <ActionSheet ref={actionSheet}>
        <Text>Hi I'm here</Text>
      </ActionSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: Colors.GRAY,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
  },
  headingText: {
    fontFamily: "outfit",
    fontSize: 18,
    textAlign: "center",
    color: Colors.WHITE,
  },
  subHeadingText: {
    fontFamily: "outfit",
    fontSize: 15,
    textAlign: "center",
    marginTop: 6,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    width: "100%",
    padding: 10,
    marginTop: 8,
    textAlignVertical: "top",
    height: 120,
  },
});
