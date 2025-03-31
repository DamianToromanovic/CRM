import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout({ contactList }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="">
              <Link to="/kontakte">Kontakte</Link>
            </a>
          </li>
        </ul>
      </nav>
      <Outlet contactList={contactList} />
    </>
  );
}
