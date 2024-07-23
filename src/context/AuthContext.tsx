"use client";

import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { Session, User } from "next-auth";
import { useSearchParams, useRouter } from "next/navigation";
import { routes } from "~/utils/routes";
import { useGetSearchParams } from "~/hooks/navigation";

type Props = {
  session: Session | null;
  children: ReactNode;
};

const AuthContext = createContext<{
  user: User | null;
}>({
  user: null,
});

const AuthProvider = ({ session, children }: Props) => {
  const router = useRouter();
  const searchParams = useGetSearchParams("user_settings");

  const handleUserSettingsClose = () => {
    if (searchParams !== null) {
      router.push(routes.home);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
      }}
    >
      <div onClick={handleUserSettingsClose}>{children}</div>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
