import { createCollectionHook } from "@/services/createCollectionHook";
import { useProductName } from "@/hooks/useProductName";
import { useUsers } from "@/hooks/useUsers";

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
  const { uid } = useUsers();
  const { data, create } = createCollectionHook<Product>("product");
  const productNames = useProductName();

  interface CriarProdutoInput {
    productName: string;
    price: number;
    producedQuantity: string;
    productionDate: string;
    harvest: string;
    status: string;
  }

  const criarProduto = (product: CriarProdutoInput) => {
    const newProduct: Omit<Product, "id"> = {
      name: product.productName,
      price: product.price,
      amount: product.producedQuantity,
      date: product.productionDate,
      harvest: `${product.harvest} - ${new Date().getTime()}`,
      id_product: new Date().getTime().toString(),
      location: "Localização",
      status: product.status,
      uid,
      value: product.price,
    };

    return create(newProduct);
  };

  return { data, productNames, criarProduto };
};
