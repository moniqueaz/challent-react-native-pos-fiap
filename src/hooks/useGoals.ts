import { createCollectionHook } from "@/services/createCollectionHook";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/services/firebaseConfig";

export type Goal = {
  id?: string;
  date: string;
  current_profit: number;
  desired_profit: number;
  completed: boolean;
  id_product?: string;
  uid?: string;
};

export const useGoals = () => {
  const { data } = createCollectionHook<Goal>("goals");
  const { user } = useAuth();

  const addGoal = async (goal: Goal) => {
    if (!user) return;

    await addDoc(collection(db, "goals"), {
      ...goal,
      uid: user.uid,
      id_product: new Date().getTime().toString(),
      id: new Date().getTime().toString(),
    });
  };

  return { goals: data, addGoal };
};
