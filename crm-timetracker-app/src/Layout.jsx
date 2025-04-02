import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Layout() {
  const [contactList, setContactList] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const navi = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/contacts-page">Kontakte</Link>
          </li>
        </ul>
      </nav>
      <Outlet
        context={{ contactList, setContactList, navi, isShown, setIsShown }}
      />
    </>
  );
}
