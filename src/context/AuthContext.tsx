"use client";

import React, { createContext, useContext, type ReactNode } from "react";
import { Session, User } from "next-auth";
import { Role } from "~/lib/types/next-auth";

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
  const user = session?.user ?? null;

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
      }}
    >
      {children}
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

export const useMustAuth = () => {
  const { user } = useAuth();
  if (user === null) {
    throw new Error("You must be authenticated to access this resource");
  }

  return { user };
};

export default AuthProvider;
