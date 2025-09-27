import React from "react";
import {
  TouchableHighlight,
  GestureResponderEvent,
  StyleSheet,
  useColorScheme
} from "react-native";
import { SizesType } from "src/types";
import { SIZES_PERCENT_VALUES } from "src/constants/styling";

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
  const isDarkMode = useColorScheme() === "dark";

  const onPress = () => onPressButton();

  const sizeValue = SIZES_PERCENT_VALUES[size];

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      onPress={onPress}
      underlayColor={"darkred"}
      style={isDarkMode ? styles.darkText : styles.whiteText}
    >
      {props.children}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  hightlightButton: {
    backgroundColor: "red",
    width: "30%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16
  },
  whiteText: {
    backgroundColor: "blue"
  },
  darkText: { backgroundColor: "green" }
});
