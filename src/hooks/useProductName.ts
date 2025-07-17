import { createCollectionHook } from "@/services/createCollectionHook";
import { useEffect } from "react";

type Product = {
  id: string;
  name: string;
};

export const useProductName = () => {
  const { data, getAll } = createCollectionHook<Product>("product-name");

  useEffect(() => {
    getAll();
  }, []);

  return data;
};
