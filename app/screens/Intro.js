import React, { useState } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RoundIconBtn from "../components/RoundIconBtn";
import colors from "../misc/colors";

const Intro = () => {
  const [name, setName] = useState("");

  const handleOnChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = async ({ onFinish }) => {
    const user = { name: name };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    if (onFinish) onFinish();
  };

  return (
    <>
      <StatusBar hiddden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Enter Your Name to continue</Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder="Enter name"
          style={styles.textInput}
        />

        {name.trim().length >= 3 ? (
          <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
        ) : null}
      </View>
    </>
  );
};

const width = Dimensions.get("window").width - 50;
console.log(width);

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    height: 40,
    width,
    color: colors.PRIMARY,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
  },
  inputTitle: {
    alignSelf: "flex-start",
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});
