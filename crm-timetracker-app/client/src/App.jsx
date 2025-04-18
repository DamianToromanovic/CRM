import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ContactsPage from "./pages/ContactsPage";
import CreateContactPage from "./pages/CreateContactPage";
import Layout from "./Layout";
import ContactDashboardPage from "./pages/ContactDashboardPage";
import TaskBoard from "./pages/TaskBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "contacts", element: <ContactsPage /> },
      { path: "contacts/contact-form", element: <CreateContactPage /> },
      { path: "contacts/contact-form/:id", element: <CreateContactPage /> },
      { path: "contacts/:contactId", element: <ContactDashboardPage /> },
      { path: "task-board", element: <TaskBoard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
