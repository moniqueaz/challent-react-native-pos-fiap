import { createCollectionHook } from "@/services/createCollectionHook";

type Product = {
  id: string;
  name: string;
  price: number;
  amount: string;
  date: string;
  harvest: string;
  id_product: string;
  location: string;
  status: string;
  uid: string;
  value: number;
};

export const useProduct = () => {
  const { data } = createCollectionHook<Product>("product");

  return data;
};
