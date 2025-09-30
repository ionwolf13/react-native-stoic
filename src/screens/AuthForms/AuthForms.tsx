import React from "react";
import { View, Text } from "react-native";
import HighlightButton from "src/components/buttons";
import { useLocalSearchParams } from "expo-router";
import { SignInForm } from "../SignInUp/SignInForm";
import { SignUpForm } from "../SignInUp/SignUpForm";

interface SignInUpInterface {}

export const AuthForms: React.FC<SignInUpInterface> = () => {
  const { form } = useLocalSearchParams();
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
      {isFormSignIn ? <SignInForm /> : <SignUpForm />}
      <HighlightButton
        onPressButton={onPressButton}
        size="lg"
        title={isFormSignIn ? "Log In" : "Sign Up"}
      />
    </View>
  );
};
