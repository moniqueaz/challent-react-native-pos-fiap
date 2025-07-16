import { createCollectionHook } from "@/services/createCollectionHook";

type Users = {
  id: string;
  criadoEm: string;
  dataNascimento: string;
  email: string;
  logradouro: string;
  nome: string;
  numero: string;
  sobrenome: string;
  uid: string;
  urlFotoPerfil: string;
};

export const useUsers = () => {
  const { data } = createCollectionHook<Users>("users");

  return data;
};
