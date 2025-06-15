import { Alert, View, Image } from "react-native";
import { styles } from "./styles";

import { Login } from "@/components/login";

const LoginPage = () => {
  const handleLogin = () => {
    // router.navigate("/");
    Alert.alert("", "Login realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/background-top.png")}
        style={styles.topImage}
      />
      <Login style={{ zIndex: 1 }} callback={handleLogin} />
      <Image
        source={require("@/assets/background-bottom.png")}
        style={styles.bottomImage}
      />
    </View>
  );
};

export default LoginPage;
