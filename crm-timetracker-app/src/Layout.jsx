import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul className="flex gap-3 justify-around">
          <li>
            <Link to="contacts">Kontakte</Link>
          </li>
          <li>Platzhalter</li>
          <li>Platzhalter</li>
          <li>Platzhalter</li>
          <li>Platzhalter</li>
          <li>Platzhalter</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
