import { createCollectionHook } from "@/services/createCollectionHook";
import { useUsers } from "@/hooks/useUsers";
import { Sale } from "@/hooks/useSales";
import { Product } from "@/hooks/useProduct";

export const useNewSales = () => {
  const { uid } = useUsers();
  const { create } = createCollectionHook<Sale>("sales");
  const { data: products, deleteByProductId } =
    createCollectionHook<Product>("product");

  interface CreateSaleInput {
    quantity: number;
    saleDate: string;
    productId: string;
    unitPrice: number;
    totalProfit: number;
    totalSale: number;
    uid: string;
  }

  interface NewSale {
    amount: number;
    date: string;
    id_product: string;
    price: number;
    profit: number;
    total_sale: number;
    uid: string;
  }

  const createSales = (sale: CreateSaleInput) => {
    const newSale: NewSale = {
      amount: sale.quantity,
      date: sale.saleDate,
      id_product: sale.productId,
      price: sale.unitPrice,
      profit: sale.totalProfit,
      total_sale: sale.totalSale || 0,
      uid: sale.uid || uid,
    };

    create(newSale).then((id) => {
      deleteByProductId(newSale.id_product);
      return id;
    });
  };

  return { products, createSales };
};
