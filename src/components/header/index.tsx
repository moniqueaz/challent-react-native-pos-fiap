import { View, TouchableOpacity, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Menu } from "@/components/menu";
import { useNotification } from "@/hooks/useNotification";
import { router } from "expo-router";

import { styles } from "./styles";

const NotificationBadge = ({ count }: { count: number }) =>
  count > 0 ? (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  ) : null;

const Notification = () => {
  const { unreadCount } = useNotification();

  const handleNotificationPress = () => {
    router.push("/notifications");
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleNotificationPress}
        style={styles.notificationContainer}
      >
        <MaterialIcons name="notifications" size={24} color="black" />
        <NotificationBadge count={unreadCount} />
      </TouchableOpacity>
    </>
  );
};

export const Header = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <TouchableOpacity onPress={() => router.push("/")}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
      </TouchableOpacity>
      <Notification />
    </View>
  );
};
