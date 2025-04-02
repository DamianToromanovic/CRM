import CustomerList from "./components/ContactList";
import { Children, useState } from "react";
import { RouterProvider } from "react-router-dom";
import React from "react";
import ContactsPage from "./pages/ContactsPage";
import ContactForm from "./components/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    Children: [
      {
        path: "contacts",
        element: <ContactsPage />,
        Children: [
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
