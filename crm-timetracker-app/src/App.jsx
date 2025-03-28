import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import { useState } from "react";

function App() {
  const [customers, setCustomer] = useState([]);
  const addCustomer = (newCustomer) => {
    setCustomer([...customers, newCustomer]);
  };
  return (
    <>
      <h2>CRM</h2>
      <CustomerForm onAddCustomer={addCustomer} />
      <CustomerList customers={customers} />
    </>
  );
}

export default App;
