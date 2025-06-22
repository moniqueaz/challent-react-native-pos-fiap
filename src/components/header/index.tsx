import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@/components/input";
import { Menu } from "@/components/menu";

import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <Input style={styles.input} placeholder="Search" />
      <TouchableOpacity onPress={() => alert("Notifications")}>
        <MaterialIcons name="notifications" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
