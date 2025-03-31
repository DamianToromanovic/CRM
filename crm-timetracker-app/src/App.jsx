import CustomerList from "./components/ContactList";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Kontakte",
        element: <Kontakte />,
      },
    ],
  },
]);

export default function App() {
  const [contactList, setContactList] = useState([]);

  return <RouterProvider router={router} contactList={contactList} />;
}
