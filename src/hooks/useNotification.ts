import { useEffect, useState } from "react";
import { createCollectionHook } from "@/services/createCollectionHook";
import { useAuth } from "@/context/AuthContext";
import {
  count$,
  updateNotificationCount,
} from "@/services/notificationService";

export type Notification = {
  message: string;
  read: boolean;
  uid: string;
  title: string;
};

export const useNotification = () => {
  const [unreadCount, setUnreadCount] = useState(0);

  const { user } = useAuth();
  const uid = user?.uid || "";

  const { data, createNotification, updateAll, getByRead } =
    createCollectionHook<Notification>("notification", false);
  console.log("data: ", data);

  useEffect(() => {
    getByRead(uid);
  }, [uid]);

  useEffect(() => {
    updateNotificationCount(data.length);
  }, [data]);

  useEffect(() => {
    const subscription = count$.subscribe((count) => {
      setUnreadCount(count);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    notifications: data,
    unreadCount: unreadCount,
    getByRead,
    uid,
    data,
    createNotification,
    updateAll,
  };
};

export const useNotificationActions = () => {
  const { data, createNotification, updateAll, uid } = useNotification();

  const addNotification = async (message: string, uid: string) => {
    if (!uid) return;
    const newNotification: Notification = {
      message,
      read: false,
      uid,
      title: "Nova Meta Atingida",
    };
    try {
      await createNotification(newNotification, uid);
    } catch (error) {}
  };

  const markAllAsRead = async () => {
    if (data.length === 0) return;
    try {
      await updateAll(uid, { read: true });
    } catch (error) {}
  };

  return {
    addNotification,
    markAllAsRead,
  };
};
