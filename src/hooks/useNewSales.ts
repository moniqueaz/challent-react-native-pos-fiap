import { createCollectionHook } from "@/services/createCollectionHook";
import { useUsers } from "@/hooks/useUsers";
import { Sale } from "@/hooks/useSales";
import { Product } from "@/hooks/useProduct";
import { useNotificationActions } from "./useNotification";
import { useGoals } from "./useGoals";

export type CreateSaleInput = {
  quantity: number;
  saleDate: string;
  productId: string;
  unitPrice: number;
  totalProfit: number;
  totalSale: number;
  uid: string;
};

export type NewSale = {
  amount: number;
  date: string;
  id_product: string;
  price: number;
  profit: number;
  total_sale: number;
  uid: string;
};

interface Goal {
  desired_profit: number;
}

const hasGoal = (goal: Goal[], sale: NewSale): boolean => {
  if (goal.length === 0) return false;
  return goal.some((gd) => gd.desired_profit <= sale.profit);
};

export const useNewSales = () => {
  const { uid } = useUsers();
  const { create } = createCollectionHook<Sale>("sales");
  const { data: products, updateByProductId } =
    createCollectionHook<Product>("product");
  const { addNotification } = useNotificationActions();
  const { getByProductId } = useGoals();

  const createSales = async (sale: CreateSaleInput) => {
    const newSale: NewSale = {
      amount: sale.quantity,
      date: sale.saleDate,
      id_product: sale.productId,
      price: sale.unitPrice,
      profit: sale.totalProfit,
      total_sale: sale.totalSale || 0,
      uid: sale.uid || uid,
    };

    let goalResult = await getByProductId(newSale.id_product);
    const goal: Goal[] = Array.isArray(goalResult)
      ? goalResult
      : goalResult
      ? [goalResult]
      : [];

    create(newSale).then((id) => {
      !!hasGoal(goal, newSale) &&
        addNotification(`Meta atingida: ${newSale.profit}`, newSale.uid);
      updateByProductId(newSale.id_product, { saled: true });
      return id;
    });
  };

  return { products, createSales };
};
