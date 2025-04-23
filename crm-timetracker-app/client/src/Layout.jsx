import React from "react";
import { Outlet, Link } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 p-4">
        <ul className="space-y-4">
          <li>
            <Link to="contacts" className="block text-gray-800 dark:text-white">
              Kontakte
            </Link>
          </li>
          <li>
            <Link
              to="task-board"
              className="block text-gray-800 dark:text-white"
            >
              Task-Board
            </Link>
          </li>
          <li className="text-gray-400">Platzhalter</li>
        </ul>
        <div className="mt-auto pt-6">
          <ThemeToggle />
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-800">
        <Outlet />
      </main>
    </div>
  );
}
