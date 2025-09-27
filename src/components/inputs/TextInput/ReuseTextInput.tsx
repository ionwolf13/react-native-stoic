import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { KeyboardInputTypes } from "src/types";

interface ReuseTextInputInterface {
  placeHolder: string;
  value: string;
  onChangeValue: () => void;
  inputType: KeyboardInputTypes;
}

export const ReuseTextInput: React.FC<ReuseTextInputInterface> = ({
  placeHolder,
  value,
  onChangeValue,
  inputType = "default"
}) => {
  const error = value === "";

  return (
    <View style={styles.container}>
      <Text>{placeHolder}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChange={onChangeValue}
        keyboardType={inputType}
      />
      {error && <Text style={styles.error}> {error} </Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: "100%"
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2 // Android shadow
  },
  error: {
    color: "red"
  }
});
