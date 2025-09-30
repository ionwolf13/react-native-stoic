import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import HighlightButton from "@components/buttons";
import { SIZES } from "@constants/styling";
import { router } from "expo-router";
import BackgroundView from "@components/backgroundview";

export const Landing: React.FC<any> = () => {
  return (
    <BackgroundView>
      <ImageBackground
        source={require("@/assets/images/stoic.png")}
        resizeMode="cover"
        style={styles.logo}
      />
      <View
        style={{
          columnGap: 24,
          width: "100%",
          alignItems: "center"
        }}
      >
        <HighlightButton
          title={"Sign In"}
          onPressButton={() =>
            router.push({ pathname: `/auth`, params: { form: "signIn" } })
          }
          size={SIZES.lg}
        />
        <HighlightButton
          title={"Sign Up"}
          onPressButton={() =>
            router.push({ pathname: `/auth`, params: { form: "signUp" } })
          }
          size={SIZES.lg}
        />
      </View>
    </BackgroundView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 320,
    height: 320,
    borderRadius: 100,
    overflow: "hidden"
  }
});
