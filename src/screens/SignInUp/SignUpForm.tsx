import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { KEYBOARD_INPUTS } from "@constants/inputs";
import { ReuseForm } from "@components/form";

interface SignUpForm {}

export const SignUpForm: React.FC<any> = () => {
  const [signUpData, setSignUpData] = React.useState([
    {
      placeHolder: "First Name",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "Last Name",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "Username",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "Email",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "Confirm Email",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "Password",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "Confirm Password",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "1First Name",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "1Last Name",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "1Username",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "1Email",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "1Confirm Email",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "1Password",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    },
    {
      placeHolder: "1Confirm Password",
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
          formData={signUpData}
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
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible"
  }
});
