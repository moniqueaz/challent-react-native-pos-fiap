import { createCollectionHook } from "@/services/createCollectionHook";
import { useAuth } from "@/context/AuthContext";
import { useProduct } from "@/hooks/useProduct";
import { useSales } from "@/hooks/useSales"; // Hook de vendas
import { useUsers } from "@/hooks/useUsers";

export type Goal = {
  date: string;
  current_profit: number;
  desired_profit: number;
  completed: boolean;
  id_product: string;
  uid?: string;
};

export const useGoals = () => {
  const { data, create, getByProductId, updateByProductId } =
    createCollectionHook<Goal>("goals");
  const { data: products } = useProduct();
  const { data: sales } = useSales();
  const { uid } = useUsers();

  const { user } = useAuth();

  const addGoal = async (goal: Goal, isUpdate: boolean) => {
    if (!user) return;
    if (isUpdate) {
      await updateByProductId(goal.id_product, { ...goal, uid });
    } else {
      await create({ ...goal, uid });
    }
  };

  const getGoalsByProductId = async (id: string) => {
    return await getByProductId(id);
  };

  const goalsWithProgress = data?.map((goal) => {
    const product = products?.find(
      (prod) => prod.id_product === goal.id_product
    );

    const relatedSales = sales?.filter(
      (sale) => sale.id_product === goal.id_product
    );

    const totalProfit =
      relatedSales?.reduce((total, sale) => total + sale.profit, 0) || 0;

    const productName = product
      ? `${product.name} - ${product.harvest}`
      : "Produto desconhecido";

    const progress =
      goal.desired_profit > 0 ? (totalProfit / goal.desired_profit) * 100 : 0;

    const color = progress >= 100 ? "green" : "red";

    return {
      ...goal,
      productName,
      progress,
      color,
    };
  });

  return {
    data,
    addGoal,
    products,
    getGoalsByProductId,
    goalsWithProgress,
    getByProductId,
  };
};
