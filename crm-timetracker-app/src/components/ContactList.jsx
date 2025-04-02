import React from "react";

export default function ContactList({ contactList }) {
  return (
    <section>
      {contactList.map((contact) => (
        <>
          <div>{contact.name}</div>
          <div>{contact.email}</div>
          <div>{contact.phone}</div>
          <div>{contact.status}</div>
          <div>{contact.createdAt}</div>
          <div>{contact.lastContacted}</div>
        </>
      ))}
    </section>
  );
}
