import { View } from "react-native";
import { Profile } from "@/components/profile";
import { useUsers } from "@/hooks/useUsers";

const EditProfilePage = () => {
  useUsers();

  return (
    <View>
      <Profile isEditMode />
    </View>
  );
};

export default EditProfilePage;
