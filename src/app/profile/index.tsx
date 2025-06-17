import { Text, View, Image } from "react-native";
import { router } from "expo-router";

import { Profile } from "@/components/profile";

import { styles } from "./styles";

const ProfilePage = () => {
  const handleLogin = () => {
    router.navigate("/");
  };

  return (
    <View>
      <Profile />
    </View>
  );
};

export default ProfilePage;
