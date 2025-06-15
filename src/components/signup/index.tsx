import { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { router } from "expo-router";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { styles } from "./styles";

type SignupCallback = (credentials: {
  email: string;
  name: string;
  password: string;
}) => void;
type LoginProps = {
  callback: SignupCallback;
  style?: object;
};

export const Signup = ({ callback, style: loginStyle }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <View style={{ ...loginStyle, ...styles.container }}>
      <Text style={styles.title}>Crie sua conta</Text>
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
          <Text style={styles.label}>Nome:</Text>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            textContentType="name"
            onChangeText={setName}
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
      <Button
        title="Cadastre-se"
        onPress={() => callback({ email, name, password })}
      />
      <View style={styles.outlinkContainer}>
        <Text style={styles.text}>Você já tem conta?</Text>
        <Pressable onPress={() => router.navigate("/login")}>
          <Text style={styles.linkText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};
