import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { useState, useEffect } from "react";
import ContactSearchBar from "../components/ContactSearchBar";

export default function ContactsPage() {
  const [isShown, setIsShown] = useState(false);
  const [searchedTerm, setsearchedTerm] = useState("");
  const [filters, setFilter] = useState({
    status: [],
    company: [],
    category: [],
  });
  const [editContact, setEditContact] = useState(null);
  const [contactList, setContactList] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

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
      const contactWithCreatedAt = {
        ...newContact,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };

      setContactList([...contactList, contactWithCreatedAt]);
      setNewContact(emptyContact);
      showForm();
    }
  };

  const showForm = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  let visibleContacts = contactList;

  if (searchedTerm) {
    visibleContacts = visibleContacts.filter((c) =>
      c.name.toLowerCase().includes(searchedTerm.toLowerCase())
    );
  } else if (filters.length > 1) {
    visibleContacts = filters;
  }

  return (
    <>
      <div>
        <ContactSearchBar
          contactList={contactList}
          setsearchedTerm={setsearchedTerm}
          searchedTerm={searchedTerm}
        />
        <ContactFilter setFilter={setFilter} filters={filters} />

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
          contactList={visibleContacts}
          setEditContact={setEditContact}
          showForm={showForm}
          setContactList={setContactList}
        />
      )}
      <Outlet />
    </>
  );
}
