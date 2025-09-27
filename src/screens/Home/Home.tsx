import React from "react";
import { Text, View } from "react-native";
import { BRAND_MOTTO, BRAND_NAME } from "src/constants/global";
import { SignInUp } from "../SignInUp/SignInUp";

export const HomeScreen: React.FC<any> = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        rowGap: 32
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Text> {BRAND_NAME} </Text>
        <Text>{BRAND_MOTTO}</Text>
      </View>
      <SignInUp />
    </View>
  );
};
