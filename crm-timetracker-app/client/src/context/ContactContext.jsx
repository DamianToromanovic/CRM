import { createContext, useContext, useReducer, useEffect } from "react";
import {
  contactListReducer,
  initialContactList,
} from "../reducers/contactListReducer";

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contactList, dispatchContactList] = useReducer(
    contactListReducer,
    initialContactList,
    () => {
      const saved = localStorage.getItem("contacts");
      return saved ? JSON.parse(saved) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <ContactContext.Provider value={{ contactList, dispatchContactList }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContactList() {
  return useContext(ContactContext);
}
