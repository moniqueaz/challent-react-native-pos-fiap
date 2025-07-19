import { View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Menu } from "@/components/menu";

import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <TouchableOpacity onPress={() => alert("Notifications")}>
        <MaterialIcons name="notifications" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
