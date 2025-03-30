import CustomerList from "./components/CustomerList";
import { useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  const [editedCustomer, setEditedCustomers] = useState(null);
  const [showInputs, setShowInputs] = useState(false);

  const addCustomer = ({ name, email, phone }) => {
    const newCustomer = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setCustomers([...customers, newCustomer]);
  };

  return (
    <>
      <h2>CRM</h2>
      <button type="button" onClick={() => setShowInputs(true)}>
        Kunde Hinzufügen
      </button>
      <CustomerList
        customers={customers}
        addCustomer={addCustomer}
        showInputs={showInputs}
      />
    </>
  );
}

export default App;
