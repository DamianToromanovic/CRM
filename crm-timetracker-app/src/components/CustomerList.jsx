import { useState } from "react";

const CustomerList = ({ customers, showInputs, addCustomer }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      {showInputs && (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="tel"
            placeholder="Telefonnummer"
            name=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="button">Abbrechen</button>
          <button
            type="button"
            onClick={() => {
              addCustomer({ name, email, phone });
              setEmail("");
              setName("");
              setPhone("");
            }}
          >
            Hinzufügen
          </button>
        </div>
      )}
      {customers.map((customer) => (
        <div key={customer.id}>
          <p>Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          <p>Telefon: {customer.phone}</p>
        </div>
      ))}
    </>
  );
};

export default CustomerList;
