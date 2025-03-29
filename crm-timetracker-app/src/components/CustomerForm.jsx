import { useEffect, useState } from "react";

const CustomerForm = ({ onAddCustomer, editingCustomer, onCancelEdit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: editingCustomer?.id ?? crypto.randomUUID(),
      name,
      email,
      phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    if (!editingCustomer) {
      onAddCustomer(newCustomer);

      setName("");
      setEmail("");
      setPhone("");
    } else if (editingCustomer) {
      const updatedCustomer = {
        ...editingCustomer,
        name,
        email,
        phone,
        updatedAt: new Date(),
      };

      onAddCustomer(updatedCustomer);
      onCancelEdit();
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  useEffect(() => {
    if (editingCustomer) {
      setName(editingCustomer.name);
      setEmail(editingCustomer.email);
      setPhone(editingCustomer.phone);
    }
  }, [editingCustomer]);

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
