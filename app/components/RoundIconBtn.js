import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || colors.LIGHT}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    shadowColor: "rgba(124, 55, 250, 0.36)",
    shadowOffset: { width: 5, height: 0 },
    shadowRadius: 9,
  },
});

export default RoundIconBtn;

// const styles = StyleSheet.create({
//   icon: {
//     backgroundColor: colors.PRIMARY,
//     padding: 15,
//     borderRadius: 50,
//     elevation: 5,
//     marginVertical: 10,
//   },
// });
