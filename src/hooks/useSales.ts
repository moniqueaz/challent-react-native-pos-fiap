import { createCollectionHook } from "@/services/createCollectionHook";

type Sale = {
  id: string;
  amount: number;
  date: string;
  id_product: string;
  price: number;
  profit: number;
  total_sale: number;
};

export const useSales = () => {
  const { data } = createCollectionHook<Sale>("sales");

  return data;
};
