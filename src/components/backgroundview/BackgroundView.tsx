import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface BackgroundView {
  children: React.ReactNode;
}

export const BackgroundView: React.FC<BackgroundView> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/images/redcool.png")}
      resizeMode="cover"
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 160
  }
});
