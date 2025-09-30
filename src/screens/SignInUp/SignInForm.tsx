import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { KEYBOARD_INPUTS } from "@constants/inputs";
import { ReuseForm } from "@components/form";

interface SignInForm {}

export const SignInForm: React.FC<any> = () => {
  const [signInData, setSignInData] = React.useState([
    {
      placeHolder: "Username",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "Password",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    }
  ]);

  const onChangeInput = () => {
    console.log("CHANGE");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.formContainer}>
        <ReuseForm
          formData={signInData}
          onChangeInput={onChangeInput}
          formName="Sign In"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  formContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible"
  }
});
