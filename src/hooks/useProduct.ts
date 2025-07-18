import { createCollectionHook } from "@/services/createCollectionHook";
import { useProductName } from "@/hooks/useProductName";
import { useUsers } from "@/hooks/useUsers";

export type Product = {
  id: string;
  name: string;
  amount: number;
  date: string;
  harvest: string;
  id_product: string;
  location: string;
  status: string;
  uid: string;
  value: number;
};

export const useProduct = () => {
  const { uid } = useUsers();
  const { data, create } = createCollectionHook<Product>("product");
  const productNames = useProductName();

  interface CriarProdutoInput {
    name: string;
    value: number;
    amount: number;
    date: string;
    harvest: string;
    location: string;
    status: string;
  }

  const criarProduto = (product: CriarProdutoInput) => {
    const newProduct: Omit<Product, "id"> = {
      ...product,
      uid,
      id_product: new Date().getTime().toString(),
    };

    return create(newProduct);
  };

  return { data, productNames, criarProduto };
};
