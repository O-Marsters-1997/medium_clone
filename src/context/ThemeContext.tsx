"use client";

import { useSession } from "next-auth/react";
import React, {
  type ReactNode,
  createContext,
  useState,
  useContext,
} from "react";
import {
  unauthedTheme,
  lightTheme,
  darkTheme,
} from "~/styles/theme/variants.css";
import { useAuth } from "./AuthContext";

type Props = {
  children: ReactNode;
};

export type Theme = "light" | "dark";

const emptyFn = () => {};

const ThemeContext = createContext<{
  selectedTheme: Theme;
  toggleTheme: () => void;
}>({ selectedTheme: "light", toggleTheme: emptyFn });

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
} as const;

const ThemeProvider = ({ children }: Props) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>("light");
  const { user } = useAuth();

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      <div className={user === null ? unauthedTheme : themeMap[selectedTheme]}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
