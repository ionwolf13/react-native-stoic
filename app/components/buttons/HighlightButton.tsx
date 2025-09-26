import React from "react";
import { TouchableHighlight, GestureResponderEvent } from "react-native";
import { SizesType } from "@/app/types";
import { SIZES_PERCENT_VALUES } from "@/app/constants/styling/styling";

interface HighlightButtonInterface {
  onPressButton: (event?: GestureResponderEvent) => void;
  children: React.ReactNode;
  size?: SizesType;
}

export const HighlightButton: React.FC<HighlightButtonInterface> = ({
  onPressButton,
  size = "md",
  ...props
}) => {
  const onPress = () => onPressButton();

  const sizeValue = SIZES_PERCENT_VALUES[size];

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      onPress={onPress}
      underlayColor={"darkred"}
      style={{
        backgroundColor: "red",
        width: sizeValue,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16
      }}
    >
      {props.children}
    </TouchableHighlight>
  );
};
