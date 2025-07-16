import { createCollectionHook } from "@/services/createCollectionHook";

type Notification = {
  id: string;
  id_message: string;
  message: string;
  title: string;
  uid: string;
};

export const useNotification = () => {
  const { data } = createCollectionHook<Notification>("notification");

  return data;
};
