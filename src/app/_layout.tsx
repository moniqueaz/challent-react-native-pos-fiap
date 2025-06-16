import { Stack } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@/components/input";
import { styles } from "./styles";

import { AuthProvider } from "@/context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => alert("Notifications")}>
                <MaterialIcons name="menu" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Input style={styles.input} placeholder="Search" />
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => alert("Notifications")}>
                <MaterialIcons name="notifications" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
