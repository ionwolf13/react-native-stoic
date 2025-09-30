import React from "react";
import { View, Text } from "react-native";
import HighlightButton from "src/components/buttons";
import { ReuseTextInput } from "src/components/inputs/TextInput";

interface ReuseFormInterface {
  formData: any[];
  onChangeInput: () => void;
  formName: string;
}

export const ReuseForm: React.FC<ReuseFormInterface> = ({
  formData,
  onChangeInput,
  formName
}) => {
  return (
    <>
      {formName && <Text> {formName} </Text>}
      {formData.map((data) => (
        <ReuseTextInput
          key={data.placeHolder}
          value={data.value}
          placeHolder={data.placeHolder}
          inputType={data.inputType}
          onChangeValue={onChangeInput}
        />
      ))}
      <HighlightButton
        title={"Submit"}
        onPressButton={() => console.log("SUBMIT")}
      />
    </>
  );
};
