import React from "react";
import { useNavigate } from "react-router-dom";
import { useContactList } from "../context/ContactContext";

export default function ContactList() {
  const navigate = useNavigate();
  const { contactList, dispatchContactList } = useContactList();

  return (
    <section className="max-w-4xl mx-auto mt-6 space-y-4">
      {contactList.map((contact) => (
        <div
          key={contact.id}
          className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
          onClick={() => navigate(`/contacts/${contact.id}`)}
        >
          <div className="flex-1 space-y-1">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {contact.name || "(Kein Name)"}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {contact.email}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {contact.phone}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Status: {contact.status}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Erstellt: {new Date(contact.createdAt).toLocaleDateString()}
            </div>
            {contact.lastContacted && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Letzter Kontakt: {contact.lastContacted}
              </div>
            )}
          </div>

          <div className="flex gap-2 justify-end sm:flex-col">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/contacts/contact-form/${contact.id}`);
              }}
              type="button"
              className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-sm"
            >
              Bearbeiten
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatchContactList({ type: "DELETE", payload: contact });
              }}
              type="button"
              className="px-3 py-1 rounded-lg border border-red-300 dark:border-red-500 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 text-sm"
            >
              Löschen
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
