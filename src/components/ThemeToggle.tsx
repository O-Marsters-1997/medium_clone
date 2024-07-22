"use client";

import React from "react";
import { useTheme } from "~/context/ThemeContext";
import Icon from "./Icon";

const ThemeToggle = () => {
  const { selectedTheme, toggleTheme } = useTheme();

  return (
    <Icon
      icon={selectedTheme === "light" ? "darkMode" : "lightMode"}
      color="primary"
      onClick={toggleTheme}
      size="sm"
    />
  );
};

export default ThemeToggle;
