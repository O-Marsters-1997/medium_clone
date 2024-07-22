"use client";

import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { Session, User } from "next-auth";

type Props = {
  session: Session | null;
  children: ReactNode;
};

const emptyFn = () => {};

const AuthContext = createContext<{
  user: User | null;
  showUserSettings: boolean;
  toggleUserSettingsVisibility: () => void;
}>({
  user: null,
  showUserSettings: false,
  toggleUserSettingsVisibility: emptyFn,
});

const AuthProvider = ({ session, children }: Props) => {
  const [showUserSettings, setShowUserSettings] = useState(false);

  const toggleUserSettingsVisibility = () => {
    setShowUserSettings(!showUserSettings);
  };

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
        showUserSettings,
        toggleUserSettingsVisibility,
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
