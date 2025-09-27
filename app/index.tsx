import React from "react";
import { Text, View } from "react-native";
import { BRAND_MOTTO, BRAND_NAME } from "src/constants/global";

export default function Index() {
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
      <Text> {BRAND_NAME}</Text>
      <Text>{BRAND_MOTTO}</Text>
    </View>
  );
}
