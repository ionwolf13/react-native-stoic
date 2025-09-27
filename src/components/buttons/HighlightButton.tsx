import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Animated,
  Text,
  StyleSheet,
  View
} from "react-native";

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

  // Dynamic styles based on size
  const sizeStyles = {
    sm: { paddingVertical: 10, paddingHorizontal: 20, fontSize: 14 },
    md: { paddingVertical: 16, paddingHorizontal: 28, fontSize: 18 },
    lg: { paddingVertical: 22, paddingHorizontal: 36, fontSize: 22 }
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPressButton}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{ width: "100%" }}
    >
      <Animated.View
        style={[
          styles.button,
          { transform: [{ scale }] },
          {
            paddingVertical: sizeStyles[size].paddingVertical,
            paddingHorizontal: sizeStyles[size].paddingHorizontal
          }
        ]}
      >
        <Text style={[styles.text, { fontSize: sizeStyles[size].fontSize }]}>
          {title}
        </Text>
        {/* Optional subtle glow */}
        {/* <View style={styles.glow} /> */}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 300,
    backgroundColor: "#DF172C", // vibrant color
    borderRadius: 8, // pill shape
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FA816C",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8, // Android shadow
    marginVertical: 10
  },
  text: {
    color: "#fff",
    fontWeight: 400,
    letterSpacing: 2
  },
  glow: {
    position: "absolute",
    width: "105%",
    height: "110%",
    backgroundColor: "#FF4B2B",
    borderRadius: 30,
    opacity: 0.15,
    zIndex: -1
  }
});
