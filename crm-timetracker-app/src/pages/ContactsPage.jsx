import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { useState } from "react";

export default function ContactsPage() {
  const [contactList, setContactList] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const [editContact, setEditContact] = useState(null);
  const emptyContact = {
    id: Date.now(),
    name: "",
    email: "",
    phone: "",
    status: "",
    createdAt: "",
    lastContacted: "",
  };
  const [newContact, setNewContact] = useState(emptyContact);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editContact) {
      const updatedList = contactList.map((contact) =>
        contact.id === editContact.id ? editContact : contact
      );
      setContactList(updatedList);
      setEditContact(null);
      showForm();
    } else {
      setContactList([...contactList, newContact]);
      setNewContact(emptyContact);
      showForm();
    }
  };

  const showForm = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  return (
    <>
      <div>
        <button onClick={showForm} type="button">
          Kontakt Hinzufügen
        </button>
      </div>
      {isShown ? (
        <ContactForm
          newContact={newContact}
          setNewContact={setNewContact}
          handleSubmit={handleSubmit}
          showForm={showForm}
          editContact={editContact}
          setEditContact={setEditContact}
          setIsShown={setIsShown}
        />
      ) : (
        <ContactList
          contactList={contactList}
          setEditContact={setEditContact}
          showForm={showForm}
          setContactList={setContactList}
        />
      )}
      <Outlet />
    </>
  );
}
