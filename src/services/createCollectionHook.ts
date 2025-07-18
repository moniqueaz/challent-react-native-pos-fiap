import { useEffect, useState } from "react";
import { useCollection } from "@/hooks/useCollection";
import { useAuth } from "@/context/AuthContext";

export type CollectionOperations<T> = {
  data: T[];
  loading: boolean;
  error: string | null;
  getAll: () => Promise<T[]>;
  getById: (id: string) => Promise<T | null>;
  create: (item: Omit<T, "id">) => Promise<string>;
  update: (id: string, item: Partial<T>) => Promise<void>;
  delete: (id: string) => Promise<void>;
  refresh: () => Promise<void>;
};

export const createCollectionHook = <T = unknown>(collectionName: string) => {
  const collection = useCollection(collectionName);
  const [data, setData] = useState<T[]>([]);
  const { user } = useAuth();
  const { uid } = user || {};
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAll = async (): Promise<T[]> => {
    try {
      setLoading(true);
      setError(null);
      const result = await collection.getAll();
      setData(result as T[]);
      return result as T[];
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getById = async (id: string): Promise<T | null> => {
    try {
      setError(null);
      return (await collection.getById(id)) as T | null;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      throw err;
    }
  };
  const getByUid = async (uid: string): Promise<T | null> => {
    try {
      setError(null);
      const result = (await collection.getByUid(uid)) as T | null;
      setData(result as T[]);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      throw err;
    }
  };

  const create = async (item: Omit<T, "id">): Promise<string> => {
    try {
      setError(null);
      const id = await collection.create(item);
      await refresh();
      return id;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      throw err;
    }
  };

  const update = async (id: string, item: Partial<T>): Promise<void> => {
    try {
      setError(null);
      await collection.update(id, item);
      await refresh();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      throw err;
    }
  };

  const deleteItem = async (id: string): Promise<void> => {
    try {
      setError(null);
      await collection.delete(id);
      await refresh();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      throw err;
    }
  };
  const deleteByProductId = async (id: string): Promise<void> => {
    try {
      setError(null);
      await collection.deleteByProductId(id);
      await refresh();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      throw err;
    }
  };

  const refresh = async (): Promise<void> => {
    await getById(uid || "");
  };

  useEffect(() => {
    getByUid(uid || "");
  }, []);

  return {
    data,
    loading,
    error,
    getAll,
    getById,
    create,
    update,
    delete: deleteItem,
    refresh,
    getByUid,
    deleteByProductId,
  };
};
