import AsyncStorage from "@react-native-async-storage/async-storage";

const LINK_STORAGE_KEY = "links-storage";

export type LinksStorage = {
  id: string;
  url: string;
  nome: string;
  category: string;
};

const get = async (): Promise<LinksStorage[]> => {
  const storage = await AsyncStorage.getItem(LINK_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];
  return response;
};

const save = async (newLink: LinksStorage) => {
  try {
    const storage = await get();

    await AsyncStorage.setItem(
      LINK_STORAGE_KEY,
      JSON.stringify([...storage, newLink])
    );
  } catch (error) {
    throw error;
  }
};

const remove = async (id: string) => {
  try {
    const storage = await get();
    const filteredStorage = storage.filter((link) => link.id !== id);
    await AsyncStorage.setItem(
      LINK_STORAGE_KEY,
      JSON.stringify(filteredStorage)
    );
  } catch (error) {
    throw error;
  }
};

export const linkStorage = {
  get,
  save,
  remove,
};
