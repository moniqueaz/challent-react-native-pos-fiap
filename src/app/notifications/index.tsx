import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Section } from "@/components/section";
import {
  useNotification,
  useNotificationActions,
} from "@/hooks/useNotification";
import { styles } from "./styles";
import { EmptyMessage } from "@/components/EmptyMessage";

const Pages = () => {
  const { notifications, updateNotificationCount } = useNotification();
  const { markAllAsRead } = useNotificationActions();

  useEffect(() => {
    return () => {
      updateNotificationCount(0);
      markAllAsRead();
    };
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16, gap: 16 }}>
        <Section title="Notificações">
          {notifications.map((notification, index) => (
            <View key={index} style={styles.notification}>
              <Text style={styles.title}>{notification.title}</Text>
              <Text style={styles.message}>{notification.message}</Text>
            </View>
          ))}
          {notifications.length === 0 && (
            <EmptyMessage>Nenhuma notificação encontrada.</EmptyMessage>
          )}
        </Section>
      </View>
    </ScrollView>
  );
};

export default Pages;
