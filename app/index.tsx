import { Text, View } from "react-native";
import { brandName } from "./constants/global/global";
import SignInUp from "./screens";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <Text> {brandName} </Text>
      <SignInUp />
    </View>
  );
}
