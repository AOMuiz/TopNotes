import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import NoteInputModal from "../components/NoteInputModal";
import RoundIconBtn from "../components/RoundIconBtn";
import SearchBar from "../components/SearchBar";
import colors from "../misc/colors";

const NoteScreen = ({ user }) => {
  const [greet, setGreet] = useState("");

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet("Morning");
    if (hrs === 1 || hrs < 17) return setGreet("Afternoon");
    return setGreet("Evening");
  };

  useEffect(() => {
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
        <SearchBar containerStyle={{ marginVertical: 15 }} />
        <View
          style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}
        >
          <Text style={styles.emptyHeader}>Add Notes</Text>
          <RoundIconBtn
            onPress={() => console.log("Opening modal")}
            antIconName="plus"
            style={styles.addBtn}
          />
        </View>
      </View>
      <NoteInputModal visible={true} />
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
    container: {
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
});
