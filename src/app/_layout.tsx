import React, { useState, useEffect } from "react";
import { Slot, useSegments, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Header } from "@/components/header";
import { useNotification } from "@/hooks/useNotification";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const { uid } = user || {};
  const segments = useSegments();
  const router = useRouter();
  const { getByRead } = useNotification();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    getByRead(uid || "");
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const publicRoutes = ["login", "signup"];

    if (!user && !publicRoutes.includes(segments[0])) {
      router.replace("/login");
    }

    if (user && publicRoutes.includes(segments[0])) {
      router.replace("/(tabs)");
    }
  }, [user, segments, router, isMounted]);

  return isMounted ? <>{children}</> : null;
};

const Layout = () => {
  return (
    <AuthProvider>
      <HeaderWrapper>
        <ProtectedRoute>
          <Slot />
        </ProtectedRoute>
      </HeaderWrapper>
    </AuthProvider>
  );
};

const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  return (
    <>
      {user && <Header />}
      {children}
    </>
  );
};

export default Layout;
