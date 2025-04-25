import React from "react";
import { useNavigate } from "react-router-dom";
import { useContactList } from "../context/ContactContext";

export default function ContactList({ contactList }) {
  const navigate = useNavigate();
  const { dispatchContactList } = useContactList();

  return (
    <section className="max-w-6xl mx-auto mt-6">
      <div className="grid grid-cols-5 font-semibold text-gray-700 dark:text-gray-300 border-b pb-2 px-4">
        <div>Name</div>
        <div>Email</div>
        <div>Telefon</div>
        <div>Status</div>
        <div className="text-right">Aktionen</div>
      </div>

      {contactList.map((contact) => (
        <div
          key={contact.id}
          className="grid grid-cols-5 items-center px-4 py-3 border-b hover:bg-gray-50 dark:hover:bg-gray-800 text-sm cursor-pointer"
          onClick={() => navigate(`/contacts/${contact.id}`)}
        >
          <div className="text-gray-900 dark:text-white">
            {contact.name || "(Kein Name)"}
          </div>
          <div className="overflow-hidden text-gray-600 dark:text-gray-300">
            {contact.email}
          </div>
          <div className="overflow-hidden text-gray-600 dark:text-gray-300">
            {contact.phone}
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            {contact.status}
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/contacts/contact-form/${contact.id}`);
              }}
              type="button"
              className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-xs"
            >
              Bearbeiten
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatchContactList({ type: "DELETE", payload: contact });
              }}
              type="button"
              className="px-2 py-1 rounded border border-red-300 dark:border-red-500 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 text-xs"
            >
              Löschen
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
