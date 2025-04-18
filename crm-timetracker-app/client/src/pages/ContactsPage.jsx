import React, { useState, useReducer } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import ContactSearchBar from "../components/ContactSearchBar";
import ContactFilter from "../components/ContactFilter";

import { useContactList } from "../context/ContactContext";
import { contactReducer, initialContact } from "../reducers/contactReducer";
import { filterReducer, initialFilters } from "../reducers/filterReducer";

export default function ContactsPage() {
  const navigate = useNavigate();
  const { contactList, dispatchContactList } = useContactList();
  const [contactState, dispatchContact] = useReducer(
    contactReducer,
    initialContact
  );
  const [searchedTerm, setsearchedTerm] = useState("");
  const [filters, dispatchFilters] = useReducer(filterReducer, initialFilters);

  let visibleContacts = contactList;

  if (searchedTerm) {
    visibleContacts = visibleContacts.filter((c) =>
      c.name.toLowerCase().includes(searchedTerm.toLowerCase())
    );
  }

  visibleContacts = visibleContacts.filter((contact) => {
    return (
      (filters.status.length === 0 ||
        filters.status.includes(contact.status)) &&
      (filters.category.length === 0 ||
        filters.category.includes(contact.category)) &&
      (filters.company.length === 0 ||
        filters.company.includes(contact.company))
    );
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Kontakte
          </h1>
          <button
            onClick={() => navigate("/contacts/contact-form")}
            type="button"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 self-start"
          >
            Kontakt Hinzufügen
          </button>
        </div>

        <ContactSearchBar
          contactList={contactList}
          setsearchedTerm={setsearchedTerm}
          searchedTerm={searchedTerm}
        />

        <ContactFilter filters={filters} dispatchFilters={dispatchFilters} />

        <ContactList
          contactList={visibleContacts}
          dispatchContact={dispatchContact}
          showForm={() => navigate("/contacts/contact-form")}
        />
      </div>

      <Outlet />
    </main>
  );
}
