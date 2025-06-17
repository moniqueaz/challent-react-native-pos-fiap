import { Stack } from "expo-router";
import { Header } from "@/components/header";

import { AuthProvider } from "@/context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <Header />
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
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
