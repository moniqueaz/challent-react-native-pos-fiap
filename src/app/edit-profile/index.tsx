import { View } from "react-native";
import { router } from "expo-router";

import { Profile } from "@/components/profile";

import { styles } from "./styles";

const EditProfilePage = () => {
  const handleLogin = () => {
    router.navigate("/");
  };

  return (
    <View>
      <Profile isEditMode />
    </View>
  );
};

export default EditProfilePage;
