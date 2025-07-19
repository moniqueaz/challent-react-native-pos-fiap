import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "@/services/firebaseConfig";
import { useCollection } from "@/hooks/useCollection";
import { User } from "@/hooks/useUsers";

type UserAuth = Omit<User, "id">;

type AuthContextType = {
  user: UserAuth | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
};

type UserData = {
  uid?: string;
  email: string;
  nome: string;
  createdAt?: String;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserAuth | null>(null);
  const { create, refresh } = useCollection("users");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser as unknown as UserAuth);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const createUser = async (newUser: UserData) => {
    const userData: UserAuth = {
      uid: newUser?.uid || "",
      criadoEm: new Date().toISOString(),
      dataNascimento: "",
      email: newUser.email,
      logradouro: "",
      nome: newUser.nome,
      numero: "",
      sobrenome: "",
      urlFotoPerfil: "",
    };
    await create(userData);
    await refresh();
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string, name: string) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential?.user;
        createUser({
          ...user,
          email: user?.email || "",
          nome: name,
          uid: user?.uid || "",
        });
      }
    );
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider.");
  }

  return context;
};
