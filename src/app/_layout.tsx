import { Stack } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@/components/input";
import { styles } from "./styles";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
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
    </Stack>
  );
}
