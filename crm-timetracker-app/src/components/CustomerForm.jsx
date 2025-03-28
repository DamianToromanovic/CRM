import { use, useState } from "react";

const CustomerForm = ({ onAddCustomer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      name,
      email,
      phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    onAddCustomer(newCustomer);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        required
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefonnummer"
      />
      <button type="submit">Kunde hinzufügen</button>
    </form>
  );
};

export default CustomerForm;
