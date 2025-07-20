import { createCollectionHook } from "@/services/createCollectionHook";
import { useProductName } from "@/hooks/useProductName";
import { useUsers } from "@/hooks/useUsers";
import { useStatus, Status } from "@/hooks/useStatus";

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

export type ProductCollection = {
  id: string;
  name: string;
  amount: string;
  date: string;
  harvest: string;
  id_product: string;
  location: string;
  status: string;
  uid: string;
  value: string;
};

const mountTotalProduct = (data: ProductCollection[]) => {
  return data?.reduce((acc, product) => acc + parseInt(product.amount), 0);
};

const mountStatusOptions = (statusData: Status[]) =>
  statusData.map((status) => status.name);

const mountTotalProductsStatus = (
  products: ProductCollection[],
  status: Status[]
) => {
  const statusKey = mountStatusOptions(status).reduce(
    (acc, status) => ({ ...acc, [status]: 0 }),
    {}
  );

  return products.reduce((acc, product) => {
    const status = product.status as keyof typeof statusKey;
    return {
      ...acc,
      [status]: acc[status] + parseInt(product.amount),
    };
  }, statusKey);
};

const calcPercentInProduction = (data: ProductCollection[]) => {
  const total = data.reduce(
    (acc, product) => acc + parseInt(product.amount),
    0
  );
  const inProduction = data
    .filter((product) => product.status === "Em produção")
    .reduce((acc, product) => acc + parseInt(product.amount), 0);

  return {
    total,
    inProduction,
    percent: total ? (inProduction / total) * 100 : 0,
  };
};

const mapProductIdToName = (products: ProductCollection[] | Product[]) => {
  return products.reduce((acc, product) => {
    acc[product.id_product] = product.name;
    return acc;
  }, {} as Record<string, string>);
};

export const useProduct = () => {
  const { uid } = useUsers();
  const { data, create, updateByProductId, getByUid } =
    createCollectionHook<ProductCollection>("product");
  const productNames = useProductName();
  const { data: statusData } = useStatus();
  const statusOptions = mountStatusOptions(statusData);
  const totalProducts = mountTotalProduct(data);

  const criarProduto = (product: Omit<ProductCollection, "id">) => {
    const newProduct: Omit<ProductCollection, "id"> = {
      ...product,
      uid,
      id_product: new Date().getTime().toString(),
      harvest: `${product.harvest} - ${new Date().getTime()}`,
    };

    return create(newProduct);
  };

  const updateStatusProduct = async (
    id: string,
    productUpdated: Partial<ProductCollection>
  ) => {
    await updateByProductId(id, { ...productUpdated });
    return await getByUid(uid);
  };

  const getTotalStockByYear = (products: ProductCollection[]) => {
    return products.reduce((acc: { [year: number]: number }, product) => {
      const year = new Date(product.date).getFullYear();

      return { ...acc, [year]: (acc[year] || 0) + parseInt(product.amount) };
    }, {});
  };

  return {
    data,
    productNames,
    criarProduto,
    statusOptions,
    updateByProductId: updateStatusProduct,
    totalProducts,
    getTotalStatusProducts: (products: ProductCollection[]) =>
      mountTotalProductsStatus(products, statusData),
    getTotalProduction: calcPercentInProduction,
    getTotalStockByYear,
    productMapping: data ? mapProductIdToName(data) : {},
  };
};
