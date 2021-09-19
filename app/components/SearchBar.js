import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../misc/colors";

const SearchBar = ({ containerStyle }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput placeholder="Search here..." style={styles.SearchBar} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  SearchBar: {
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    // height: 40,
    // borderRadius: 40,
    paddingLeft: 18,
    fontSize: 20,

    height: 44,
    borderRadius: 20,
    backgroundColor: "#f5f6fa",
    opacity: 0.2,
  },
  container: {},
});
