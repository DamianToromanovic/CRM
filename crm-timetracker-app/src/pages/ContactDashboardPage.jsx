import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContactList } from "../context/ContactContext";

export default function ContactDashboardPage() {
  const { contactId } = useParams();
  const { contactList, dispatchContactList } = useContactList();
  const navigate = useNavigate();

  const contact = contactList.find((c) => c.id === Number(contactId));

  if (!contact) {
    return (
      <main className="p-6 text-red-500 font-semibold">
        Kontakt nicht gefunden.
      </main>
    );
  }

  const handleDelete = () => {
    if (confirm("Kontakt wirklich löschen?")) {
      dispatchContactList({ type: "DELETE", payload: contact });
      navigate("/contacts");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Kontakt-Details
        </h1>

        <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 space-y-2">
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Name:
            </span>{" "}
            <span className="text-gray-800 dark:text-white">
              {contact.name}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              E-Mail:
            </span>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-600 dark:text-blue-400 underline"
            >
              {contact.email}
            </a>
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Telefon:
            </span>{" "}
            <a
              href={`tel:${contact.phone}`}
              className="text-blue-600 dark:text-blue-400 underline"
            >
              {contact.phone}
            </a>
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Firma:
            </span>{" "}
            <span className="text-gray-800 dark:text-white">
              {contact.company}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Status:
            </span>{" "}
            <span className="text-gray-800 dark:text-white">
              {contact.status}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Letzter Kontakt:
            </span>{" "}
            <span className="text-gray-800 dark:text-white">
              {contact.lastContact || "—"}
            </span>
          </div>
        </section>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/contacts")}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
          >
            Zurück
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Löschen
          </button>
        </div>
      </div>
    </main>
  );
}
