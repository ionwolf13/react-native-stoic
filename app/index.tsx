import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { BRAND_MOTTO, BRAND_NAME } from "src/constants/global";
import HighlightButton from "@components/buttons";

export default function Index() {
  return (
    <ImageBackground
      source={require("@/assets/images/redcool.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <ImageBackground
        source={require("@/assets/images/stoic.png")}
        resizeMode="cover"
        style={styles.logo}
      />
      <View style={{ columnGap: 24 }}>
        <HighlightButton title={"Sign In"} onPressButton={() => {}} />
        <HighlightButton title={"Sign Up"} onPressButton={() => {}} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 160
  },
  logo: {
    width: 320,
    height: 320,
    borderRadius: 100,
    overflow: "hidden"
  }
});
