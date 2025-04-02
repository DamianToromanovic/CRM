import React from "react";

export default function ContactForm({
  newContact,
  setNewContact,
  handleSubmit,
  showForm,
}) {
  const handleInput = (e) => {
    setNewContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form action="">
      <label name="name" htmlFor=""></label>
      <input
        type="text"
        name="name"
        value={newContact.name}
        onChange={handleInput}
      />
      <label name="name" htmlFor="">
        Name
      </label>
      <input type="text" name="name" onChange={handleInput} />
      <label name="email" htmlFor="">
        E-mail
      </label>
      <input type="email" name="email" onChange={handleInput} />
      <label htmlFor="" name="phone">
        Telefonnummer
      </label>
      <input type="tel" name="phone" onChange={handleInput} />
      <label htmlFor="" name="status">
        Status
      </label>
      <input type="text" name="status" onChange={handleInput} />
      <label htmlFor="" name="createdAt">
        Erstellt am
      </label>
      <input type="text" name="createdAt" onChange={handleInput} />
      <label htmlFor="" name="lastContacted">
        Letzter Kontakt
      </label>
      <input type="text" name="lastContacted" onChange={handleInput} />
      <button type="submit" onClick={handleSubmit}>
        Hinzufügen
      </button>
      <button onClick={showForm} type="button">
        Abbrechen
      </button>
    </form>
  );
}
