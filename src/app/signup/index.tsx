import React from "react";
import { Alert, View, Image } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { Signup } from "@/components/signup";
import { styles } from "./styles";

const SignupPage = () => {
  const { signup } = useAuth();

  const handleSignup = async (credentials: {
    email: string;
    name: string;
    password: string;
  }) => {
    try {
      await signup(credentials.email, credentials.password, credentials.name);
      Alert.alert("Sucesso", "Conta criada com sucesso!");
    } catch {
      Alert.alert("Erro", "Não foi possível criar a conta.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/background-top.png")}
        style={styles.topImage}
      />
      <Signup style={{ zIndex: 1 }} callback={handleSignup} />
      <Image
        source={require("@/assets/background-bottom.png")}
        style={styles.bottomImage}
      />
    </View>
  );
};

export default SignupPage;
