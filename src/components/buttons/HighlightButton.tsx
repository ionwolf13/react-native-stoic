import React, { useState } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { SIZES_PERCENT_VALUES } from "@constants/styling";

type ButtonSize = "sm" | "md" | "lg";

interface HighlightButtonProps {
  title: string;
  onPressButton: () => void;
  size?: ButtonSize;
}

export const HighlightButton: React.FC<HighlightButtonProps> = ({
  title,
  onPressButton,
  size = "md" // default size
}) => {
  const [scale] = useState(new Animated.Value(1));
  const styles = getStyles(size);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      tension: 100,
      useNativeDriver: true
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPressButton}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
        <Text style={[styles.text]}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const getStyles = (size: ButtonSize) =>
  StyleSheet.create({
    button: {
      width: SIZES_PERCENT_VALUES[size],
      backgroundColor: "#DF172C", // vibrant color
      borderRadius: 8, // pill shape
      alignItems: "center",
      justifyContent: "center",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.35,
      shadowColor: "#212120",
      shadowRadius: 10,
      elevation: 8, // Android shadow
      marginVertical: 10,
      paddingVertical: 8
    },
    text: {
      color: "#fff",
      fontWeight: 600,
      letterSpacing: 2,
      fontSize: 16
    },
    glow: {
      position: "absolute",
      width: "105%",
      height: "110%",
      backgroundColor: "#FF4B2B",
      borderRadius: 30,
      opacity: 0.15,
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  });
