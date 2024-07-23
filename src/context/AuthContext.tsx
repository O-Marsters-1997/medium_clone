"use client";

import React, { createContext, useContext, type ReactNode } from "react";
import { Session, User } from "next-auth";

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

export default AuthProvider;
