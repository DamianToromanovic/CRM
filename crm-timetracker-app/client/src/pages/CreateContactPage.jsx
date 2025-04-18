import React, { useReducer } from "react";
import ContactForm from "../components/ContactForm";
import { contactReducer, initialContact } from "../reducers/contactReducer";
import { useContactList } from "../context/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateContactPage() {
  const { id } = useParams();
  const { contactList, dispatchContactList } = useContactList();
  const navigate = useNavigate();

  const kontaktZumBearbeiten = contactList.find((c) => c.id === Number(id));

  const [contactState, dispatchContact] = useReducer(
    contactReducer,
    kontaktZumBearbeiten || initialContact
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const kontaktDaten = {
      ...contactState,
      id: kontaktZumBearbeiten ? kontaktZumBearbeiten.id : Date.now(),
      createdAt: kontaktZumBearbeiten
        ? kontaktZumBearbeiten.createdAt
        : new Date().toISOString(),
    };
    console.log(kontaktZumBearbeiten);

    dispatchContactList({
      type: kontaktZumBearbeiten ? "UPDATE" : "ADD",
      payload: kontaktDaten,
    });

    dispatchContact({ type: "RESET" });
    navigate("/contacts");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {kontaktZumBearbeiten
            ? "Kontakt bearbeiten"
            : "Neuen Kontakt erstellen"}
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
