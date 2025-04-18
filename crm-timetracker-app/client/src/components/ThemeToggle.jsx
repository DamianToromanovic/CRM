import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 text-black dark:text-white"
    >
      {theme === "dark" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}
