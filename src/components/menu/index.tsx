import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router, Href } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";
import { styles } from "./styles";

type MenuItem = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  url?: Href;
  action?: () => void;
  visible: boolean;
};

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      icon: "home",
      url: "/(tabs)",
      visible: !!user,
    },
    {
      title: "Profile",
      icon: "person",
      url: "/profile",
      visible: !!user,
    },
    {
      title: "Login",
      icon: "login",
      url: "/login",
      visible: !user,
    },
    {
      title: "Cadastro",
      icon: "person-add",
      url: "/signup",
      visible: !user,
    },
    {
      title: "Cadastrar Produto",
      icon: "add-circle-outline",
      url: "/new-product",
      visible: !!user,
    },
    {
      title: "Cadastrar Venda",
      icon: "attach-money",
      url: "/new-sale",
      visible: !!user,
    },
    {
      title: "Cadastrar Metas",
      icon: "flag",
      url: "/new-goal",
      visible: !!user,
    },
    {
      title: "Atualizar Status",
      icon: "update",
      url: "/update-status",
      visible: !!user,
    },
    {
      title: "Logout",
      icon: "logout",
      action: logout,
      visible: !!user,
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.boxContainer}>
          {menuItems
            .filter((item) => item.visible)
            .map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setIsOpen(false);
                  if (item.action) item.action();
                  if (item.url) router.push(item.url);
                }}
                style={styles.item}
              >
                <MaterialIcons name={item.icon} size={24} color="black" />
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
  );
};
