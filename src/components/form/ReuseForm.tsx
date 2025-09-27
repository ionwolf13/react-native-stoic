import React from "react";
import { View, Text } from "react-native";
import HighlightButton from "src/components/buttons";
import { ReuseTextInput } from "src/components/inputs/TextInput";
import { KEYBOARD_INPUTS } from "src/constants/inputs";

interface ReuseFormInterface {
  formData: any[];
}

export const ReuseForm: React.FC<ReuseFormInterface> = () => {
  const formData = [
    {
      placeHolder: "Name",
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
      placeHolder: "Password",
      value: "",
      required: true,
      inputType: KEYBOARD_INPUTS.default
    }
  ];

  return (
    <View>
      <Text> Form </Text>
      {formData.map((data) => (
        <ReuseTextInput
          key={data.placeHolder}
          value={data.value}
          placeHolder={data.placeHolder}
          inputType={data.inputType}
          onChangeValue={() => console.log("CHANGE")}
        />
      ))}
      <HighlightButton onPressButton={() => console.log("SUBMIT")}>
        <Text>Submit Form</Text>
      </HighlightButton>
    </View>
  );
};
