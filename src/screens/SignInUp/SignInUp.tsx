import React from "react";
import { View, Text } from "react-native";
import HighlightButton from "src/components/buttons";
import { ReuseForm } from "@components/form";

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
      <View>
        {isFormSignIn ? (
          <Text style={{ textAlign: "center" }}> Welcome Back! </Text>
        ) : (
          <Text style={{ textAlign: "center" }}> Join Us! </Text>
        )}
      </View>
      <ReuseForm formData={[]} />
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
