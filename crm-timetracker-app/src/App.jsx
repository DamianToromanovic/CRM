import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ContactsPage from "./pages/ContactsPage";
import CreateContactPage from "./pages/CreateContactPage";
import Layout from "./Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "contacts",
        element: <ContactsPage />,
        children: [
          {
            path: "contact-form",
            element: <CreateContactPage />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
