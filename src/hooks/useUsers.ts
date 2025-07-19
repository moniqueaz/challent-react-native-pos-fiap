import { createCollectionHook } from "@/services/createCollectionHook";

export type User = {
  id: string;
  criadoEm: Date | string;
  dataNascimento: Date | string;
  email: string;
  logradouro: string;
  nome: string;
  numero: string;
  sobrenome: string;
  uid: string;
  urlFotoPerfil: string;
};

export const useUsers = () => {
  const { data, update, refresh } = createCollectionHook<User>("users");

  const user = data?.[0];

  const updateUser = async (updatedData: Partial<User>) => {
    if (!user) throw new Error("Usuário não encontrado");

    await update(user.id, updatedData);
    await refresh();
  };

  return {
    ...user,
    updateUser,
  };
};
