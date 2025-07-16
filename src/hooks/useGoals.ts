import { createCollectionHook } from "@/services/createCollectionHook";

type Goal = {
  id: string;
  date: string;
  production: number;
  sales: number;
};

export const useGoals = () => {
  const { data } = createCollectionHook<Goal>("goals");

  return data;
};
