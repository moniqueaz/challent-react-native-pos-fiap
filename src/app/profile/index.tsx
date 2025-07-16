import { View } from "react-native";
import { Profile } from "@/components/profile";
import { useUsers } from "@/hooks/useUsers";
const ProfilePage = () => {
  useUsers();

  return (
    <View>
      <Profile />
    </View>
  );
};

export default ProfilePage;
