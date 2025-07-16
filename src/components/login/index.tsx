import { FC, useState } from "react";
import { Text, Pressable, View } from "react-native";
import { router } from "expo-router";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { styles } from "./styles";

type LoginCallback = (credentials: { email: string; password: string }) => void;
type LoginProps = {
  callback: LoginCallback;
  style?: object;
};

export const Login: FC<LoginProps> = ({ callback, style: loginStyle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ ...loginStyle, ...styles.container }}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.fieldContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha:</Text>
          <Input
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
      </View>
      <Button title="Entrar" onPress={() => callback({ email, password })} />
      <View style={styles.outlinkContainer}>
        <Text style={styles.text}>Não tenho conta?</Text>
        <Pressable onPress={() => router.navigate("/signup")}>
          <Text style={styles.linkText}>Cadastre-se</Text>
        </Pressable>
      </View>
    </View>
  );
};
