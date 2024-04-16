import React, { useState } from "react";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null);

  const handleCustomerSelect = (customerId: number) => {
    setSelectedCustomer(customerId);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold m-8">Customer Details Portal</h1>
      <div className="flex">
        <CustomerList
          onSelect={handleCustomerSelect}
          selectedCustomerId={selectedCustomer}
        />
        <CustomerDetails customerId={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
