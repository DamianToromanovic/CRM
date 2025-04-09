import React, { useReducer } from "react";
import ContactForm from "../components/ContactForm";
import { contactReducer, initialContact } from "../reducers/contactReducer";
import { useContactList } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

export default function CreateContactPage() {
  const [contactState, dispatchContact] = useReducer(
    contactReducer,
    initialContact
  );
  const { dispatchContactList } = useContactList();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...contactState,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    dispatchContactList({ type: "ADD", payload: newContact });
    dispatchContact({ type: "RESET" });
    navigate("/contacts");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Neuen Kontakt erstellen
        </h1>
        <ContactForm
          contactState={contactState}
          dispatchContact={dispatchContact}
          handleSubmit={handleSubmit}
          showForm={() => navigate("/contacts")}
          setIsShown={() => {}}
        />
      </div>
    </main>
  );
}
