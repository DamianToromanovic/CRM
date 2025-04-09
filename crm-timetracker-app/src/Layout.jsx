import React from "react";
import { Outlet, Link } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";

export default function Layout() {
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
        <ul className="flex gap-4">
          <li>
            <Link to="contacts" className="text-gray-800 dark:text-white">
              Kontakte
            </Link>
          </li>
          <li className="text-gray-400">Platzhalter</li>
          <li className="text-gray-400">Platzhalter</li>
        </ul>
        <ThemeToggle />
      </nav>
      <Outlet />
    </>
  );
}
