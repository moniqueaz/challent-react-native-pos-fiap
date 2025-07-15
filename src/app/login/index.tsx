import React from "react";
import { Alert, View, Image } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { Login } from "@/components/login";
import { styles } from "./styles";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      await login(credentials.email, credentials.password);
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    } catch {
      Alert.alert("Erro", "Não foi possível realizar o login.");
    }
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
