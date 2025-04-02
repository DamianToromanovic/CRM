import React from "react";

export default function ContactForm({
  newContact,
  setNewContact,
  handleSubmit,
  showForm,
  editContact,
  setEditContact,
}) {
  const handleInput = (e) => {
    if (editContact) {
      setEditContact((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } else {
      setNewContact((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <form action="">
      <label name="name" htmlFor="name">
        Name
      </label>
      <input
        value={(editContact ? editContact.name : newContact.name) || ""}
        type="text"
        name="name"
        onChange={handleInput}
      />
      <label name="email" htmlFor="email">
        E-mail
      </label>
      <input
        value={(editContact ? editContact.email : newContact.email) || ""}
        type="email"
        name="email"
        onChange={handleInput}
      />
      <label htmlFor="phone" name="phone">
        Telefonnummer
      </label>
      <input
        value={(editContact ? editContact.phone : newContact.phone) || ""}
        type="tel"
        name="phone"
        onChange={handleInput}
      />
      <label htmlFor="status" name="status">
        Status
      </label>
      <input
        value={(editContact ? editContact.status : newContact.status) || ""}
        type="text"
        name="status"
        onChange={handleInput}
      />
      <label htmlFor="createdAt" name="createdAt">
        Erstellt am
      </label>
      <input
        value={
          (editContact ? editContact.createdAt : newContact.createdAt) || ""
        }
        type="text"
        name="createdAt"
        onChange={handleInput}
      />
      <label htmlFor="lastContacted" name="lastContacted">
        Letzter Kontakt
      </label>
      <input
        value={
          (editContact
            ? editContact.lastContacted
            : newContact.lastContacted) || ""
        }
        type="text"
        name="lastContacted"
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSubmit}>
        Speichern
      </button>
      <button onClick={() => showForm()} type="button">
        Abbrechen
      </button>
    </form>
  );
}
