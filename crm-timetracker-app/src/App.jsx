import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import { useState } from "react";

function App() {
  const [customers, setCustomer] = useState([]);
  const [editingCustomer, setEditedCustomer] = useState(null);
  const handleEditClick = (customer) => {
    setEditedCustomer(customer);
  };
  const addCustomer = (newCustomer) => {
    setCustomer([...customers, newCustomer]);
  };
  const handleDelete = (id) => {
    const filtered = customers.filter((customer) => customer.id !== id);
    setCustomer(filtered);

    if (editingCustomer.id === id) {
      setEditedCustomer(null);
    }
  };

  const cancelEdit = () => {
    setEditedCustomer(null);
  };

  return (
    <>
      <h2>CRM</h2>
      <CustomerForm
        onCancelEdit={cancelEdit}
        onAddCustomer={addCustomer}
        editingCustomer={editingCustomer}
      />
      <CustomerList
        onDelete={handleDelete}
        onEdit={handleEditClick}
        customers={customers}
      />
    </>
  );
}

export default App;
