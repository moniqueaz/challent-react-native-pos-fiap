import { useEffect } from "react";
import { createCollectionHook } from "@/services/createCollectionHook";

export type Status = {
  name: string;
};

export const useStatus = () => {
  const { data, getAll } = createCollectionHook<Status>("status");

  useEffect(() => {
    getAll();
  }, []);

  return { data };
};
