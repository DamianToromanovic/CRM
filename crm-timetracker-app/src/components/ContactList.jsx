import React from "react";

export default function ContactList({
  contactList,
  setEditContact,
  showForm,
  setContactList,
}) {
  return (
    <section>
      {contactList.map((contact) => (
        <div key={contact.id}>
          <div>{contact.name}</div>
          <div>{contact.email}</div>
          <div>{contact.phone}</div>
          <div>{contact.status}</div>
          <div>{contact.createdAt}</div>
          <div>{contact.lastContacted}</div>
          <button
            onClick={() => {
              setEditContact(contact);
              showForm();
            }}
            type="button"
          >
            Bearbeiten
          </button>
          <button
            onClick={() => {
              setContactList(contactList.filter((c) => c.id !== contact.id));
            }}
            type="button"
          >
            Löschen
          </button>
        </div>
      ))}
    </section>
  );
}
