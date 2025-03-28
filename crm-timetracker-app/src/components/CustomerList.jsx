const CustomerList = ({ customers }) => {
  return (
    <div>
      {customers.map((customer) => (
        <div key={customer.email}>
          <p>{customer.name}</p>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
