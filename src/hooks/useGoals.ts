import { createCollectionHook } from "@/services/createCollectionHook";
import { useAuth } from "@/context/AuthContext";
import { useProduct } from "@/hooks/useProduct";
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

    const productName = product
      ? `${product.name} - ${product.harvest}`
      : "Produto não encontrado";

    return {
      ...goal,
      productName,
      progress:
        goal.desired_profit > 0
          ? (goal.current_profit / goal.desired_profit) * 100
          : 0,
    };
  });

  return {
    data,
    addGoal,
    products,
    getGoalsByProductId,
    goalsWithProgress,
  };
};
