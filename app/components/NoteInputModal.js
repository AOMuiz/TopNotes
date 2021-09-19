import React, { useState } from "react";
import {
  Keyboard,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../misc/colors";

const NoteInputModal = ({ visible }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "title") {
      setTitle(text);
    }
    if (valueFor === "desc") {
      setDesc(text);
    }
  };

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput
            value={title}
            onChangeText={(text) => handleOnChangeText(text, "title")}
            onEndEditing
            placeholder="Title"
            style={[styles.input, styles.title]}
          />
          <TextInput
            value={desc}
            multiline
            onChangeText={(text) => handleOnChangeText(text, "desc")}
            placeholder="Notes"
            style={[styles.input, styles.desc]}
          />
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View styles={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default NoteInputModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.PRIMARY,
    fontSize: 20,
    color: colors.DARK,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  desc: {
    height: 100,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
});
