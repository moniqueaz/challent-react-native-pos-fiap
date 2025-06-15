import { Text, View, Image } from "react-native";
import { router } from "expo-router";

import { Signup } from "@/components/signup";

import { styles } from "./styles";

const SignupPage = () => {
  const handleLogin = () => {
    router.navigate("/");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/background-top.png")}
        style={styles.topImage}
      />
      <Signup style={{ zIndex: 1 }} callback={handleLogin} />
      <Image
        source={require("@/assets/background-bottom.png")}
        style={styles.bottomImage}
      />
    </View>
  );
};

export default SignupPage;
