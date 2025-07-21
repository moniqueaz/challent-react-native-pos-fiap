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

export const createCollectionHook = <T = unknown>(
  collectionName: string,
  starter: boolean = true
) => {
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
  const getByUidNoSaled = async (uid: string): Promise<T | null> => {
    try {
      setError(null);
      const result = (await collection.getByUidNoSaled(uid)) as T | null;
      console.log("result: ", result);
      setData(result as T[]);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      throw err;
    }
  };
  const getByRead = async (uid: string): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      const result = (await collection.getByRead(uid)) as T | null;

      setData(result as T[]);
      setLoading(false);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      setLoading(false);
      throw err;
    }
  };
  const getByProductId = async (id: string): Promise<T | null> => {
    try {
      setError(null);
      const result = (await collection.getByProductId(id)) as T | null;
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

  const createNotification = async (
    item: Omit<T, "id">,
    uid: string
  ): Promise<string> => {
    try {
      setError(null);
      const id = await collection.create(item);
      await getByRead(uid);
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
  const updateByProductId = async (
    id: string,
    item: Partial<T>
  ): Promise<void> => {
    try {
      setError(null);
      await collection.updateByProductId(id, item);
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
  const updateAll = async (id: string, item: Partial<T>): Promise<void> => {
    try {
      setError(null);
      await collection.updateAll(id, item);
      await getByRead(id);
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
    starter && getByUid(uid || "");
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
    updateByProductId,
    getByProductId,
    updateAll,
    getByRead,
    createNotification,
    getByUidNoSaled,
  };
};
