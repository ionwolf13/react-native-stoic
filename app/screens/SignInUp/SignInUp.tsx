import React from "react";
import { View, Text } from "react-native";
import HighlightButton from "@/app/components/buttons";

interface SignInUpInterface {}

export const SignInUp: React.FC<SignInUpInterface> = () => {
  const [isFormSignIn, setIsFormSignIn] = React.useState<boolean>(false);

  const onPressButton = () => {
    setIsFormSignIn((prev) => !prev);
  };

  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <HighlightButton onPressButton={onPressButton} size="lg">
        {isFormSignIn ? (
          <Text style={{ textAlign: "center" }}> Log In </Text>
        ) : (
          <Text style={{ textAlign: "center" }}> Sign Up </Text>
        )}
      </HighlightButton>
    </View>
  );
};
