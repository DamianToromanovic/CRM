import React from "react";
import { useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function ContactsPage({ navi, setContactList }) {
  const { contactList, setContactList, isShown, setIsShown } =
    useOutletContext();
  const emptyContact = {
    name: "",
    email: "",
    phone: "",
    status: "",
    createdAt: "",
    lastContacted: "",
  };
  const [newContact, setNewContact] = useState(emptyContact);

  const handleSubmit = (e) => {
    e.prevent.Default();
    setContactList([...contactList, newContact]);
    setNewContact(emptyContact);
    setIsShown(false);
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
        <ContactForm handleSubmit={handleSubmit} showForm={showForm} />
      ) : (
        <div></div>
      )}
    </>
  );
}
