import { createCollectionHook } from "@/services/createCollectionHook";
import { useProductName } from "@/hooks/useProductName";
import { useUsers } from "@/hooks/useUsers";
import { useStatus } from "@/hooks/useStatus";

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

type CriarProdutoInput = {
  productName: string;
  value: number;
  producedQuantity: string;
  productionDate: string;
  harvest: string;
  status: string;
};

export const useProduct = () => {
  const { uid } = useUsers();
  const { data, create, updateByProductId, getByUid } =
    createCollectionHook<Product>("product");
  const productNames = useProductName();
  const { data: statusData } = useStatus();
  const statusOptions = statusData.map((status) => status.name);

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
      harvest: `${product.harvest} - ${new Date().getTime()}`,
    };

    return create(newProduct);
  };

  const updateStatusProduct = async (
    id: string,
    productUpdated: Partial<Product>
  ) => {
    await updateByProductId(id, { ...productUpdated });
    return await getByUid(uid);
  };

  return {
    data,
    productNames,
    criarProduto,
    statusOptions,
    updateByProductId: updateStatusProduct,
  };
};
