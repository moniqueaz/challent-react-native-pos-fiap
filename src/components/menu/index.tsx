import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { router, Href } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type MenuProps = TouchableOpacityProps & {};

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

const menuItems: {
  title: string;
  icon: MaterialIconName;
  color: string;
  url: Href;
}[] = [
  {
    title: "Profile",
    icon: "manage-accounts",
    color: colors.blue[200],
    url: "/profile" as Href,
  },
  {
    title: "Change Password",
    icon: "key",
    color: colors.rose[200],
    url: "/change-password" as Href,
  },
  {
    title: "Logout",
    icon: "logout",
    color: colors.orange[200],
    url: "/logout" as Href,
  },
];

export const Menu = ({}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.boxContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.item,
                  ...(menuItems.length === index + 1 && {
                    borderBottomWidth: 0,
                  }),
                }}
                onPress={() => {
                  setIsOpen(false);
                  router.navigate(item.url || "/");
                }}
              >
                <MaterialIcons name={item.icon} size={24} color={item.color} />
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
