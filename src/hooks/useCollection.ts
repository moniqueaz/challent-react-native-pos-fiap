import { db } from "@/services/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
  where,
} from "firebase/firestore";
export const useCollection = (name: string) => {
  const contextCollection = collection(db, name);

  const contextQuery = query(contextCollection);

  return {
    get: async (id: string) => {
      const documentSnapshot = await getDoc(doc(contextCollection, id));
      return documentSnapshot.data();
    },
    getAll: async () => {
      const snapshot = await getDocs(contextQuery);
      const result = snapshot.docs.map((doc) => doc.data());
      return result;
    },
    getById: async (id: string) => {
      const documentSnapshot = await getDoc(doc(contextCollection, id));
      return documentSnapshot.exists() ? documentSnapshot.data() : null;
    },
    create: async (data: Record<string, any>) => {
      const docRef = await addDoc(contextCollection, data);
      return docRef.id;
    },
    update: async (id: string, data: Record<string, any>) => {
      const docRef = doc(contextCollection, id);
      await setDoc(docRef, data, { merge: true });
      return id;
    },

    updateAll: async (id: string, data: Record<string, any>) => {
      const q = query(contextCollection, where("uid", "==", id));
      const snapshot = await getDocs(q);
      const updatePromises = snapshot.docs.map((docSnapshot) =>
        setDoc(doc(contextCollection, docSnapshot.id), data, { merge: true })
      );
      await Promise.all(updatePromises);
      return snapshot.docs.length; // retorna quantos documentos foram atualizados
    },
    delete: async (id: string) => {
      const docRef = doc(contextCollection, id);
      await deleteDoc(docRef);
      return id;
    },
    refresh: async () => {
      const snapshot = await getDocs(contextQuery);
      const result = snapshot.docs.map((doc) => doc.data());
      return result;
    },
    getByUid: async (uid: string) => {
      const q = query(contextCollection, where("uid", "==", uid));
      const snapshot = await getDocs(q);
      const result = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return result;
    },
    getByRead: async (uid: string) => {
      const q = query(
        contextCollection,
        where("uid", "==", uid),
        where("read", "==", false)
      );
      const snapshot = await getDocs(q);
      const result = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return result;
    },
    getBySaled: async (uid: string) => {
      const q = query(
        contextCollection,
        where("uid", "==", uid),
        where("saled", "==", false)
      );
      const snapshot = await getDocs(q);
      const result = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return result;
    },
    getByProductId: async (id: string) => {
      const q = query(contextCollection, where("id_product", "==", id));
      const snapshot = await getDocs(q);
      const result = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return result;
    },
    deleteByProductId: async (id: string) => {
      const q = query(contextCollection, where("id_product", "==", id));
      const snapshot = await getDocs(q);

      const deletePromises = snapshot.docs.map((docSnapshot) =>
        deleteDoc(doc(contextCollection, docSnapshot.id))
      );

      await Promise.all(deletePromises);
      return snapshot.docs.length; // retorna quantos documentos foram deletados
    },
    updateByProductId: async (id: string, data: Record<string, any>) => {
      const q = query(contextCollection, where("id_product", "==", id));
      const snapshot = await getDocs(q);
      const updatePromises = snapshot.docs.map((docSnapshot) =>
        setDoc(doc(contextCollection, docSnapshot.id), data, { merge: true })
      );
      await Promise.all(updatePromises);
      return snapshot.docs.length;
    },
  };
};
