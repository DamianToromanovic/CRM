const CustomerList = ({ customers, onEdit, onDelete }) => {
  return (
    <div>
      {customers.map((customer) => (
        <div key={customer.id}>
          <p>{customer.name}</p>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
          <button type="button" onClick={() => onEdit(customer)}>
            Bearbeiten
          </button>
          <button type="button" onClick={() => onDelete(customer.id)}>
            Löschen
          </button>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
